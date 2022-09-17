import { atom, selector } from "recoil";
import { fetchData } from "./firebase";
import { Todo } from "./types";

export const todolistState = atom<Todo[]>({
  key: "todolistState",
  default: [],
});

export const fireTodoState = selector<Todo[]>({
  key: "fireTodoState",
  get: async (_) => await fetchData(),
});
