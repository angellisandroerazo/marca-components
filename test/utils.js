import tailwindcss from "tailwindcss";
import postcss from "postcss";
import minify from '@csstools/postcss-minify'

import plugin from "tailwindcss/plugin.js";

import componentsAngel from "../src/index.js";

const TAILWIND_BASE = "@tailwind utilities;";

export function generatePluginCSS(options) {
  return postcss([
    minify(),
    tailwindcss({
      plugins: [
        plugin(function ({ addComponents }) {
          addComponents({ componentsAngel });
        }),
      ],
    }),
  ])
    .process(`${TAILWIND_BASE} .content {@apply btn-angel-erazo}`)
    .then((result) => result.css);
}

console.log(await generatePluginCSS());
