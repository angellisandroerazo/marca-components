import createPlugin from 'tailwindcss/plugin';
import components from './elements.js';

/**
 * @type {import('tailwindcss/types/config.js').PluginCreator}
 */
const pluginCreator = (api) => {
  api.addComponents([components]);
}


/**
 * @type {import('tailwindcss/types/config.js').PluginsConfig}
 */
const pluginConfig = {components}

export default createPlugin(pluginCreator, pluginConfig)
