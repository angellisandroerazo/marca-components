# Marca components

![GitHub stars](https://img.shields.io/github/stars/AngelLisandroErazo/marca-components)
![GitHub Forks](https://img.shields.io/github/forks/AngelLisandroErazo/marca-components)
![GitHub PRs](https://img.shields.io/github/issues-pr/AngelLisandroErazo/marca-components)
![GitHub issues](https://img.shields.io/github/issues/AngelLisandroErazo/marca-components)
![GitHub Contributors](https://img.shields.io/github/contributors/AngelLisandroErazo/marca-components)

![web](./lib/img/web-img.png)

![Tailwind
CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue?style=for-the-badge&logo=tailwind-css)
![Astro](https://img.shields.io/badge/Astro-4.5.5-orange?style=for-the-badge&logo=astro)


This project aims to leverage the power of Tailwind CSS by integrating a specialized component plugin. This plugin extends Tailwind CSS by providing a curated collection of ready-to-use UI components. By incorporating this plugin into our development workflow, we can streamline UI development, reduce repetitive styling tasks, and accelerate project delivery.

## Installation

#### Package install

- npm
```bash
npm install @alemdev/marca-components
```

#### Plugin Implementation
> Use the plugin in your Tailwind CSS project:

```js
// tailwind.config.mjs
import components from '@alemdev/marca-components'
    export default {
        // ...rest of the options
        plugins: [components],
    }    
```