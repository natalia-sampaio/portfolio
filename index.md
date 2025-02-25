---
layout: home

hero:
    name: Nafi Dev
    text: Software Developers
    tagline: Off-the-rack works, but tailored fits best.
    image:
        dark: /logo-dark.svg
        light: /logo-light.svg
        alt: Nafi Dev
    actions:
        - theme: brand
          text: Meet our team
          link: /team
        - theme: alt
          text: Contact Us
          link: "mailto:admins@nafi.dev"

features:
    - icon: 🧵
      title: Custom Component Libraries
      details: Tailor-made UI components to ensure design consistency and development efficiency.
      link: /live-projects#custom-component-library
      linkText: Case study

    - icon: 📈
      title: Scalable Web Applications
      details: High-performance, maintainable applications built with the latest web technologies.
      link: /live-projects
      linkText: Case study

    - icon: 📱
      title: Modern UI Solutions
      details: Responsive, accessible, and visually polished interfaces that elevate user experience.
      link: /live-projects#fullstack-e-commerce-website
      linkText: Case study

    - icon: 🔗
      title: Seamless Frontend-Backend Integration
      details: Bridging the gap between design and functionality.
      link: /live-projects
      linkText: Case study
---

<script setup>
import { onMounted } from "vue";
onMounted(() => {
    const blockContainer = document.getElementById("blocks");
    const blockSize = 50;
    const screenWidth = window.innerWidth;
    console.log(screenWidth);
    const screenHeight = window.innerHeight;
    console.log(screenHeight);
    const numCols = Math.ceil(screenWidth / blockSize);
    const numRows = Math.ceil(screenHeight / blockSize);
    const numBlocks = numCols * numRows;
    console.log(numCols);
    console.log(numRows);
    console.log(numBlocks);

    function createBlocks() {
        for (let i = 0; i < numBlocks; i++) {
            const block = document.createElement("div");
            block.classList.add("block");
            block.dataset.index = i;
            block.addEventListener("mousemove", highlightRandomNeighbors);
            blockContainer.appendChild(block);
        }
    }

    function highlightRandomNeighbors() {
        const index = parseInt(this.dataset.index);
        const neighbors = [
            index - 1,
            index + 1,
            index - numCols,
            index + numCols,
            index - numCols - 1,
            index - numCols + 1,
            index + numCols - 1,
            index + numCols + 1,
        ].filter(
            (i) =>
                i >= 0 &&
                i < numBlocks &&
                Math.abs((i % numCols) - (index % numCols)) <= 1
        );

        this.classList.add("highlight");
        setTimeout(() => {
            this.classList.remove("highlight");
        }, 500);

        shuffleArray(neighbors)
            .slice(0, 1)
            .forEach((nIndex) => {
                const neighbor = blockContainer.children[nIndex];
                if (neighbor) {
                    neighbor.classList.add("highlight");
                    setTimeout(() => {
                        neighbor.classList.remove("highlight");
                    }, 500);
                }
            });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    createBlocks();
});
</script>

<div class="blocks-container">
    <div id="blocks"></div>
</div>

<style>
  :root{
    --vp-c-brand-1: #3961A6;
    --vp-c-brand-2: #4978C2;
    --vp-c-brand-3:  #5A8CD9;
    --vp-c-brand-soft: rgba(90,140,217,0.15);
    --block:  rgba(214,90,67,0.15);
    --highlight: #A43A2B;
  }
  .VPFeatures,
  .image {
    z-index: 1
  }
  .blocks-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
  }
  #blocks {
    background-color: var(--vp-c-bg);
    width: 105vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    overflow: hidden; 
  }
  .block {
    width: 50px;
    height: 50px;
    border: 0.5px solid var(--block);
    transition: border-color 0.3s ease;
    flex-shrink: 0;
  }
  .highlight {
    border-color: var(--highlight);
  }
</style>
