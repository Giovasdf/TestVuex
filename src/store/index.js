import { createStore } from "vuex";
import { tareas } from "../db/db_tareas";
import { usuarios } from "../db/db_usuarios";
export default createStore({
  state: {
    tareas,
    usuarios
  },

  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
