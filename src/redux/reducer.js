import { ADD_TODOS } from "./constants";

const initialState = [];

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_TODOS:
    return [...state, ...payload]

  default:
    return state
  }
}
