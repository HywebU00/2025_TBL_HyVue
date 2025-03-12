// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/adminLayout.vue"),
    children: [
      {
        path: "system",
        component: () => import("@/views/admin/systemComponent.vue"),
      },
      {
        path: "component",
        component: () => import("@/views/admin/Component.vue"),
      },
      {
        path: "/",
        component: () => import("@/views/admin/defaultComponent.vue"),
      },
      {
        path: "event",
        component: () => import("@/views/admin/eventComponent.vue"),
      },
      {
        path: "from",
        component: () => import("@/views/admin/fromComponent.vue"),
      },
      {
        path: "table",
        component: () => import("@/views/admin/tableComponent.vue"),
      },
      {
        path: "card",
        component: () => import("@/views/admin/cardComponent.vue"),
      },
      {
        path: "widget",
        component: () => import("@/views/admin/widgetComponent.vue"),
      },
      {
        path: "addNews",
        component: () => import("@/views/admin/addNewsComponent.vue"),
      },
      {
        path: "mediaPhoto",
        component: () => import("@/views/admin/mediaPhotoComponent.vue"),
      },
    ],
  },
  {
    path: "/index",
    component: () => import("@/views/layout/indexPage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/layout/loginPage.vue"),
  },
  {
    path: "/mplogin",
    component: () => import("@/views/layout/mpLoginPage.vue"),
  },
  {
    path: "/front",
    component: () => import("@/views/layout/frontLayout.vue"),
    children: [
      {
        path: "/front",
        component: () => import("@/views/front/cardComponent＿.vue"),
      },
      {
        path: "/front/card",
        component: () => import("@/views/front/cardComponent.vue"),
      },
      {
        path: "/front/event",
        component: () => import("@/views/front/eventComponent.vue"),
      },
      {
        path: "/front/auth",
        component: () => import("@/views/front/authComponent.vue"),
      },
      {
        path: "/front/method",
        component: () => import("@/views/front/methodComponent.vue"),
      },
      {
        path: "/front/form",
        component: () => import("@/views/front/formComponent.vue"),
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
