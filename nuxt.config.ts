// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    ssr: true,
  
    app: {
      head: {
          htmlAttrs: {
            lang: 'en'
          },
          bodyAttrs: {
            class: 'demo'
          },
          charset: 'utf-8',
          titleTemplate: '%s | IT Genius Engineering',
          meta: [
            {
              name: 'author',
              content: 'IT Genius Engineering Ltd., Thailand'
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1, maximum-scale=5'
            }
          ]
      }
  },

  css: ['~/assets/css/tailwind.css'],

  postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
  },

  modules: [
    'nuxt-icon',
    [
      // Nuxt Robots
      '@nuxtjs/robots',
      {
        UserAgent: "*",
        Disallow: "",
      }
    ],
  ],

  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    }
  },

})
