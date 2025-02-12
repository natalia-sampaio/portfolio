import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/",
    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ],
    title: "natalia@nafi.dev",
    description: "A frontend developer's portfolio site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Projects", link: "/live-projects" },
        ],

        sidebar: [
            {
                text: "Projects",

                /* items: [
                    {
                        text: "Project 1",
                        link: "/https://github.com/natalia-sampaio",
                    },
                    {
                        text: "Project 2",
                        link: "/https://github.com/natalia-sampaio",
                    },
                ], */
            },
        ],

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
                icon: "mailgun",
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
