import { createRouter, createWebHistory } from "vue-router";
import Tareas from "@/components/Tareas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Tareas,
    },
    {
      path: "/tareas",
      name: "tareas",
      component: () =>
        import( "../views/Tareas.vue"),
    },
    {
      path: "/usuarios",
      name: "usuarios",
      component: () =>
        import( "../views/Usuarios.vue"),
    },
  ],
});

export default router;
