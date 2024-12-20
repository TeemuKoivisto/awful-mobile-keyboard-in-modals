import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'
import { preprocessMeltUI, sequence } from '@melt-ui/pp'

import { resolve } from 'path'

import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'
import tailwindcss from 'tailwindcss'

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sequence([
    preprocess({
      postcss: {
        // @TODO you are not supposed to need both configFilePath & plugins but the intellisense doesn't
        // work with configFilePath and providing plugins directly doesn't load Tailwind so...
        configFilePath: resolve('postcss.config.js'),
        plugins: [tailwindcss, autoprefixer, nested]
      }
    }),
    preprocessMeltUI()
  ]),

  kit: {
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    },
    files: {
      routes: './src/routes',
      lib: './src/lib'
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),
    alias: {
      $components: 'src/components',
      $modals: 'src/modals'
    }
  }
}
