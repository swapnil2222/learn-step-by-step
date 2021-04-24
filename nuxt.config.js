import { createSEOMeta } from './utils/seo'
import { fetchSitemapRoutes } from './utils/sitemap'

export default async () => {
  const routes = await fetchSitemapRoutes()
  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Swapnil Renge Blog',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ...createSEOMeta({
          description: 'Get to know about all blogs written by swapnil renge',
        }),
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css',
        },
      ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/eslint
      '@nuxtjs/eslint-module',
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      [
        'storyblok-nuxt',
        {
          accessToken: process.env.STORYBLOK_KEY,
          cacheProvider: 'memory',
        },
      ],
      ['@nuxtjs/markdownit', { html: true, injected: true }],
      [
        '@nuxtjs/markdownit',
        { html: true, injected: true, use: ['markdown-it-prism'] },
      ],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    sitemap: {
      hostname: process.env.HOST_NAME,
      routes, // all the dynamic routes
    },
  }
}
