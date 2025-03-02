import puppeteer from "puppeteer-core";
import chrome from "@sparticuz/chromium";
import { IncomingMessage, ServerResponse } from "http";

export default async function handler(
    req: IncomingMessage,
    res: ServerResponse
) {
    try {
        // Extract URL parameter safely
        const url =
            new URL(
                req.url || "",
                `http://${req.headers.host}`
            ).searchParams.get("url") || "https://www.nafi.dev";

        console.log("Generating screenshot for:", url);

        const browser = await puppeteer.launch({
            args: chrome.args,
            executablePath: await chrome.executablePath(),
            headless: true, // Set this explicitly
            defaultViewport: null, // Ensure proper rendering
        });

        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 630 });
        await page.goto(url, { waitUntil: "networkidle2" });

        const screenshot = await page.screenshot({ type: "jpeg" });

        await browser.close();

        res.writeHead(200, {
            "Content-Type": "image/jpeg",
            "Content-Length": screenshot.length, // Ensure proper response
        });

        res.end(screenshot);
    } catch (error) {
        console.error("❌ Error generating OG image:", error);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to generate screenshot" }));
    }
}
