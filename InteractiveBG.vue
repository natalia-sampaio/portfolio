<script setup>
import { ref, onMounted, onBeforeUnmount, watchEffect } from "vue";

const gridSize = 50;
const screenWidth = ref(window.innerWidth);
const screenHeight = ref(window.innerHeight);
const svgNS = "http://www.w3.org/2000/svg";
let svgElement = null;
let squares = []; // Store all squares

// **Generate the Grid**
const generateGrid = () => {
    if (!svgElement) return;

    svgElement.innerHTML = ""; // Clear previous content
    const numCols = Math.ceil(screenWidth.value / gridSize);
    const numRows = Math.ceil(screenHeight.value / gridSize);

    svgElement.setAttribute("width", screenWidth.value);
    svgElement.setAttribute("height", screenHeight.value);
    svgElement.setAttribute(
        "viewBox",
        `0 0 ${screenWidth.value} ${screenHeight.value}`
    );

    const gridGroup = document.createElementNS(svgNS, "g");
    squares = []; // Reset the list

    for (let x = 0; x < numCols; x++) {
        for (let y = 0; y < numRows; y++) {
            const rect = document.createElementNS(svgNS, "rect");
            rect.setAttribute("x", x * gridSize);
            rect.setAttribute("y", y * gridSize);
            rect.setAttribute("width", gridSize);
            rect.setAttribute("height", gridSize);
            rect.setAttribute("fill", "transparent");
            rect.setAttribute("stroke", "var(--grid-color)");
            rect.setAttribute("stroke-width", "1");
            rect.classList.add("grid-square");

            squares.push(rect);
            gridGroup.appendChild(rect);
        }
    }

    svgElement.appendChild(gridGroup);
};

// **Cursor Tracking with requestAnimationFrame**
let lastX = 0,
    lastY = 0;
let animationFrame;

const highlightGridSquares = (event) => {
    lastX = event.clientX;
    lastY = event.clientY;

    if (!animationFrame) {
        animationFrame = requestAnimationFrame(() => {
            applyHighlight(lastX, lastY);
            animationFrame = null;
        });
    }
};

// **Apply Highlights: Centered on Cursor**
const applyHighlight = (x, y) => {
    if (!squares.length) return;

    const rect = svgElement.getBoundingClientRect();
    const gridX = Math.floor((x - rect.left) / gridSize) * gridSize;
    const gridY = Math.floor((y - rect.top) / gridSize) * gridSize;

    // Reset previous highlights (but not new ones)
    squares.forEach((square) => {
        square.removeAttribute("style"); // Remove old highlights
    });

    // Find **exact square under cursor**
    const centerSquare = squares.find(
        (rect) =>
            parseFloat(rect.getAttribute("x")) === gridX &&
            parseFloat(rect.getAttribute("y")) === gridY
    );

    if (!centerSquare) return;

    // Apply highlight to center square
    centerSquare.setAttribute("stroke", "var(--highlight-color)");

    // Find **neighboring squares** (left, right, top, bottom, diagonals)
    const neighbors = squares.filter((rect) => {
        const rx = parseFloat(rect.getAttribute("x"));
        const ry = parseFloat(rect.getAttribute("y"));
        return (
            (Math.abs(rx - gridX) <= gridSize && ry === gridY) || // Left/Right
            (Math.abs(ry - gridY) <= gridSize && rx === gridX) || // Top/Bottom
            (Math.abs(rx - gridX) === gridSize &&
                Math.abs(ry - gridY) === gridSize) // Diagonals
        );
    });

    // **Randomly highlight up to 3 of them**
    neighbors.sort(() => Math.random() - 0.5);
    const highlighted = neighbors.slice(0, 3);

    highlighted.forEach((rect) => {
        rect.setAttribute("stroke", "var(--highlight-color)");
    });

    // **🔥 Remove highlights after 0.3s**
    setTimeout(() => {
        centerSquare.setAttribute("stroke", "var(--grid-color)");

        highlighted.forEach((rect) => {
            rect.setAttribute("stroke", "var(--grid-color)");
        });
    }, 300);
};

// **Update Grid Size on Resize**
const updateScreenSize = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
    generateGrid();
};

onMounted(() => {
    const bgContainer = document.createElement("div");
    bgContainer.setAttribute("id", "bg-container");
    bgContainer.style.position = "fixed";
    bgContainer.style.top = "0";
    bgContainer.style.left = "0";
    bgContainer.style.width = "100vw";
    bgContainer.style.height = "100vh";
    bgContainer.style.zIndex = "-1";

    svgElement = document.createElementNS(svgNS, "svg");
    svgElement.setAttribute("id", "grid");
    svgElement.style.width = "100%";
    svgElement.style.height = "100%";
    svgElement.style.pointerEvents = "none";

    bgContainer.appendChild(svgElement);
    document.body.appendChild(bgContainer);

    generateGrid();
    window.addEventListener("mousemove", highlightGridSquares);
});

// **Reactive Resize Handling**
watchEffect(() => {
    window.addEventListener("resize", updateScreenSize);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", updateScreenSize);
    window.removeEventListener("mousemove", highlightGridSquares);
    if (svgElement) svgElement.remove();
});
</script>
