---
outline: deep
---

<script setup>
import MockupComponent from '/MockupComponent.vue';
</script>

# Live Projects

Welcome to the live projects section! Here you can explore some of the exciting projects I have built using Vue, TypeScript, and other modern technologies. Each project demonstrates my approach to problem-solving and my ability to craft high-quality, scalable solutions. Check them out below!

## Fullstack Todo App <Badge type="tip" text="live" />

<MockupComponent link="https://to-do-app-phi-seven.vercel.app/" title="Fullstack Todo App" />

### Description

A task management application that allows users to create and organize their to-do lists. Tasks are saved locally for guests and synced to user accounts upon login. Features include task filtering, bulk deletion of completed items, inline editing, and drag-and-drop reordering using the native HTML5 Drag and Drop API—eliminating the need for external libraries. The app also supports internationalization, automatically detecting the user's browser language. It defaults to Brazilian Portuguese for browsers set to Portuguese (BR) and English for all other languages.

### Upcoming Features <Badge type="warning" text="in dev" /> <Badge type="tip" text="Release: Q2 2025" />

🚀 Transition to a Decentralized Application (dApp): The app is being redesigned to replace Firebase with a smart contract deployed on Ethereum/Polygon, ensuring full data ownership and decentralization. This upgrade will:

-   Store tasks on-chain using Solidity smart contracts
-   Use MetaMask for authentication, removing the need for traditional logins
-   Enable a more transparent, tamper-proof task management experience

To optimize blockchain efficiency, future enhancements may include:

-   IPFS integration for off-chain task storage
-   Multi-list support for better task organization

### Tech Stack

-   Frontend: Vue 3, TypeScript, Tailwind CSS, DaisyUI
-   Backend (Current): Firebase (being replaced with a smart contract)
-   Blockchain (Upcoming): Solidity, Ethers.js, Web3.js, MetaMask authentication
-   Deployment: Vercel

### Links

[![Live demo](https://img.shields.io/badge/Vercel-Todo_App-black?logo=vercel)](https://to-do-app-phi-seven.vercel.app/)

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/natalia-sampaio/to-do-app)

## Custom Component Library <Badge type="warning" text="in dev" /> <Badge type="tip" text="Release: Q2 2025" />

### Description

This lightweight component library leverages DaisyUI for faster development, providing a solid foundation for custom UI components. While the primary focus is on showcasing the architecture and benefits of creating a custom component library, it also ensures a streamlined development process with ready-to-use components. The library is designed to help developers avoid the common pitfalls of personalizing existing UI libraries and ensures better performance, scalability, and maintainability by including only what is needed for the project.

#### Why and when?

When a client has a specific UI in mind, creating a custom component library can be a much more effective solution than relying on existing UI libraries. While it might seem easier to leverage pre-built libraries, developers often end up spending a significant amount of time trying to personalize them. This process leads to bloated, inefficient code that’s difficult to maintain, scale, and read—often resulting in a frustrating development experience.

#### Benefits

Building a custom component library provides several benefits:

<ul>
  <li>
    Better Performance: By including only the components you truly need, you can eliminate unnecessary overhead and optimize your application’s performance.
  </li>
  <li>
    Scalability and Maintainability: Tailoring the library to your project's unique needs results in cleaner, more modular code that’s easier to maintain and expand over time.
  </li>
  <li>
    Client Ownership: As a bonus, your client may choose to sell the library to others, opening up potential additional revenue streams.
  </li>
</ul>

#### Our architecture

For this project, we used a monorepo architecture. A monorepo is ideal when multiple projects or packages need to share common code, and you want to manage them in a single repository. It’s particularly useful when:

<ul>
<li>
Multiple projects are being developed simultaneously (e.g., the component library, main application, docs, tests, and related services).
</li>
<li>
Consistency across projects is important, ensuring that all parts of the system use the same version of shared dependencies.
</li>
<li>
Centralized management is required, allowing easy updates and testing across all parts of the codebase from one location.
</li>
</ul>

To handle the scalability challenges and complexity of maintaining a large component library, we opted to use Hygen as a code generator. This allows us to automate the process of creating new components. When we run the script to create a new component, it automatically generates the necessary files (Vue component, story component for Histoire, and the docs for the component) so we don't forget any of the steps. This ensures that our development process is consistent and efficient.

Additionally, we used Changesets to manage the changelogs and VitePress to handle the documentation pages. This combination helps us keep track of versioning and ensures that our documentation is always up to date.

By opting for a monorepo and using tools like Hygen, Changesets, and VitePress, we were able to streamline the development process, simplify dependency management, and maintain a high level of consistency across all parts of the project.

### Tech stack

-   Vue.js
-   TypeScript
-   Tailwind CSS & Daisy UI
-   PNPM

### Links

-   **Docs**: [Custom Component Library](#)

## Fullstack Product Management App <Badge type="warning" text="in dev" /> <Badge type="tip" text="Release: Q2 2025" />

### Description

This is an open-source, full-featured product management app built with and for the Vue ecosystem. It streamlines workflows, tracks tasks, and enhances team collaboration—similar to Jira, but with custom-tailored features designed to fit the needs of the Vue community.

### Tech Stack

-   Vue.js
-   Nuxt.js
-   TypeScript
-   Pinia
-   Vite
-   Firebase

### Links

-   **Live Link**: [Fullstack Product Management App](#)
-   **Repo**: [Github repo](#)

## Node-Based Flow Editor <Badge type="tip" text="live" />

<MockupComponent link="https://node-based-flow-editor.vercel.app/" title="Node-Based Flow Editor" />

### Description

A Vue.js-based flow editor focusing on the power of reactivity. This tool demonstrates how to build highly dynamic, interactive UIs with Vue's reactivity system for complex workflows.

### Tech Stack

-   Vue.js
-   TypeScript
-   Vercel

### Links

-   **Live Link**: [Node-Based Flow Editor](https://node-based-flow-editor.vercel.app/)
-   **Repo**: [Github repo](https://github.com/natalia-sampaio/node-based-flow-editor)

## Fullstack E-Commerce Website <Badge type="tip" text="live" />

<MockupComponent link='https://e-commerce-6xs8t1xsq-nataliasampaios-projects.vercel.app/' title="Fullstack E-Commerce Website" hasMobileView />

### Description

A complete e-commerce platform built with Vue.js for the frontend, Firebase for backend operations, and Pinia for state management. This project demonstrates real-time database interactions, authentication, product management, and seamless state handling.

### Tech Stack

-   Vue.js
-   TypeScript
-   Firebase
-   Pinia
-   Tailwind CSS
-   Vercel

### Links

[![Live demo](https://img.shields.io/badge/Vercel-E--commerce_Project-black?logo=vercel)](https://e-commerce-lake-eight.vercel.app/)

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/natalia-sampaio/e-commerce)

---

If you have any questions or want to learn more about any of these projects, feel free to reach out to us!
