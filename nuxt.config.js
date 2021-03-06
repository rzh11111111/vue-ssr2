const pkg = require("./package");

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  // 路由配置
  router: {
    // middleware: ['auth'],
    extendRoutes(routes, resolve) {
      // routes:生成的路由表
      routes.push({
        name: "foo",
        path: "/foo",
        component: resolve(__dirname, "pages/custom.vue"),
      });
    },
  },

  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/api-inject",
    "@/plugins/interceptor",
  ],

  /*
   ** Nuxt.js modules
   */
  //配了nginx就不用了代理了，首屏渲染从服务端直接请求也不用代理
  //只有其他页面请求会跨域要代理
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],
  axios: {
    proxy: true,
  },
  proxy: {
    "/api": "http://localhost:8080",
  },
//
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
