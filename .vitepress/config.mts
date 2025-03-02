import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    outDir: "dist",
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
        [
            "meta",
            {
                property: "og:image",
                content: "https://www.nafi.dev/api/og?url=https://www.nafi.dev",
            },
        ],
        ["meta", { property: "og:image:type", content: "image/jpeg" }],
        ["meta", { property: "og:image:width", content: "1200" }],
        ["meta", { property: "og:image:height", content: "630" }],
        ["meta", { name: "twitter:card", content: "summary_large_image" }],
        [
            "meta",
            {
                name: "twitter:image",
                content: "https://www.nafi.dev/api/og?url=https://www.nafi.dev",
            },
        ],
    ],
    title: "nafi.dev",
    description:
        "Nafi Dev is a technology company founded by Natália Andrade and Filipe Danielski Andrade, combining expertise in frontend and full-stack development. We believe in custom software solutions that fit your needs like a glove—built for efficiency, maintainability, and seamless integration.",
    themeConfig: {
        logo: "/logo-light.svg",
        nav: [
            { text: "Home", link: "/" },
            { text: "About us", link: "/about-us" },
            { text: "Meet our team", link: "/team" },
        ],

        sidebar: {
            "/": [
                {
                    text: "Learn more about Natália",
                    link: "/natalia",
                    items: [
                        {
                            text: "Client work",
                            link: "/natalia/client-work",
                        },
                        {
                            text: "Live projects",
                            link: "/natalia/live-projects",
                        },
                        {
                            text: "About Natália",
                            link: "/natalia/about",
                        },
                    ],
                },
                {
                    text: "Learn more about Filipe",
                    link: "/filipe",
                    items: [
                        {
                            text: "Client work",
                            link: "/filipe/client-work",
                        },
                        {
                            text: "Live projects",
                            link: "/filipe/live-projects",
                        },
                        { text: "About Filipe", link: "/filipe/about" },
                    ],
                },
            ],
            "/natalia/": [
                {
                    text: "Natália Andrade",
                    link: "/natalia",
                    items: [
                        { text: "Client work", link: "/natalia/client-work" },
                        {
                            text: "Live projects",
                            link: "/natalia/live-projects",
                        },
                        { text: "About Natália", link: "/natalia/about" },
                    ],
                },
            ],
            "/filipe/": [
                {
                    text: "Filipe Danielski",
                    link: "/filipe",
                    items: [
                        { text: "Client work", link: "/filipe/client-work" },
                        {
                            text: "Live projects",
                            link: "/filipe/live-projects",
                        },
                        { text: "About Filipe", link: "/filipe/about" },
                    ],
                },
            ],
        },

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/natalia-sampaio",
            },
            {
                icon: "x",
                link: "https://x.com/nataliaSRSA",
            },
            {
                icon: "linkedin",
                link: "https://www.linkedin.com/in/natalia-srs/?locale=en_US",
            },
            {
                icon: {
                    svg: '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="3.6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="a" d="M5.5,31.25v9.5a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V20.25l-18-15h-1l-18,15v6l18,9.54h1l11-5.92s0-7.12,0-7.62a1.11,1.11,0,0,0-1-1h-21a1.12,1.12,0,0,0-1,1c-.05.5,0,2.92,0,2.92"></path></g></svg>',
                },
                link: "mailto:natalia@nafi.dev",
            },
        ],
        footer: {
            message:
                'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright:
                'Copyright © 2025-present <a href="https://github.com/natalia-sampaio">Nafi Dev</a>',
        },
    },
});
