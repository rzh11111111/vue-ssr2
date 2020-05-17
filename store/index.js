// 1.定义到index
// 2.实现nuxtServerInit
// 在服务端跑
export const actions = {
    nuxtServerInit({ commit }, { app }) {
      // app是nuxt实例


      //安装了cookie-universal-nuxt才能使用$cookies
      const token = app.$cookies.get("token");
      if (token) {
        console.log("nuxtServerInit: token:"+token);
        commit("user/init", token);
      }
    }
  };