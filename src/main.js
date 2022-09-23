import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import config from "@/config";
import VueLazyload from "vue-lazyload";
import VueI18n from "vue-i18n";
import store from "./store/index";
Vue.config.productionTip = false;
Vue.prototype.$config = config.customData();
const loadimage = require("./assets/loading.svg");
const errorimage = require("./assets/loadingError.svg");
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  observer: true,
  throttleWait: 50,
  observerOptions: {
    rootMargin: "0px",
    threshold: 0.1,
  },
});
Vue.use(VueI18n);
const messages = {
  cn: {
    message: {
      msg: "Overlord在线阅读站点",
      desc: "提供从网络获得的Overlord小说阅读",
      main: "正文",
      branch: "外传",
      others: "其他",
      about_desc:
        "本项目为Vue制作的练习项目，所有资源来自于网络，请尊重版权，购买正版，禁止转载、外传。当我发现有人企图滥用时，将随时关闭图片服务器。",
    },
  },
  tw: {
    message: {
      msg: "Overlord在線閱讀站點",
      desc: "提供從網絡獲得的Overlord小説閱讀",
      main: "正文",
      branch: "外傳",
      others: "其他",
      about_desc:
        "本項目為Vue制作的練習項目，所有資源來自於網絡，請尊重版權，購買正版，禁止轉載、外傳。當我發現有人企圖濫用時，將隨時關閉圖片服務器。",
    },
  },
};

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: "cn",
  messages,
});
new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
