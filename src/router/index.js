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
