import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "card",
  state: () => ({
    a: 1,
  }),
  getters: {
    doubleCount: (state) => state.a * 2,
  },
});
