export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Web Geliştiricisi - Onur Ayçiçek',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sektörde 5 yıllık deneyime sahibim. HTML, CSS, SCSS, JS, NodeJS, VueJS, PHP ve Python dil/frameworklerine hakimim. Mysql, MongoDB ve Redis ile çalışma yaptım. Daha önceki projelerimde Google Cloud Run, Heroku, Vercel, Github Pages ve özel sunucu ortamlarına deployment gerçekleştirdim. RabbitMQ deneyimim mevcut. Ci/cd süreçleri için aktif olarak Circleci kullanıyorum. Git komutlarına hakimim. Mikroservis mimarisi hakkında deneyim sahibiyim. Rest api ile aktif geliştirdiğim uygulamalar mevcut.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/static/assets/main.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
