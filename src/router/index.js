import Vue from "vue";
import VueRouter from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/views/Home";
import Read from "@/components/views/Read.vue";
import Main from "@/components/views/Main.vue";
import About from "@/components/views/About.vue";
import NotFound from "@/components/views/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: Home,
        meta: {
          title: "Overlord_オーバーロード",
        },
      },
      {
        path: "/about",
        component: About,
        meta: {
          title: "Overlord_オーバーロード",
        },
      },
      {
        path: "/404",
        name: "NotFound",
        component: NotFound,
        meta: {
          title: "Overlord_オーバーロード",
        },
      },
    ],
  },
  {
    path: "/read",
    name: "Read",
    component: Read,
    props: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  // 记录浏览器的滚动进度
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.path === "/home" || to.path === "/about" || to.path === "/read") {
    if (to.path === "/about") document.title = to.meta.title + "_About";
    next();
  } else next({ path: "/home" });
});


router.afterEach(() => {
  !function (p) { "use strict"; !function () { var s = window, e = document, i = p, c = "".concat("https:" === e.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"), n = e.createElement("script"), r = e.getElementsByTagName("script")[0]; n.type = "text/javascript", n.setAttribute("charset", "UTF-8"), n.async = !0, n.src = c, n.id = "LA_COLLECT", i.d = n; var o = function () { s.LA.ids.push(i) }; s.LA ? s.LA.ids && o() : (s.LA = p, s.LA.ids = [], o()), r.parentNode.insertBefore(n, r) }() }({ id: "JoP9vqRt7SP7W47O", ck: "JoP9vqRt7SP7W47O", hashMode: true });
})
