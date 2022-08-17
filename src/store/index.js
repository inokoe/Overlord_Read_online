import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

// 用来存储数据
const state = {
  darkModel: "false",
  language: "cn",
};
// 响应组件中的事件
const actions = {
  getDarkModelHistory() {
    state.darkModel = window.localStorage.getItem("DarkModel") || "false";
    window.localStorage.setItem("DarkModel", state.darkModel);
  },
  getLanguage() {
    state.language = window.localStorage.getItem("Language") || "cn";
    window.localStorage.setItem("Language", state.language);
  },
};
// 操作数据
const mutations = {
  changeDarkModel() {
    if (state.darkModel === "true") state.darkModel = "false";
    else if (state.darkModel === "false") state.darkModel = "true";
    window.localStorage.setItem("DarkModel", state.darkModel);
    // this.$i18n.locale = state.language;
  },
  changeLanguage() {
    if (state.language === "cn") state.language = "tw";
    else if (state.language === "tw") state.language = "cn";
    window.localStorage.setItem("Language", state.language);
  },
};
// 用来将state数据进行加工
const getters = {};
// 新建并暴露store
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
