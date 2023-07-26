import { ADD_TODOS } from "./constants";

export function addTodos(item){
    return {
        type:ADD_TODOS,
        payload: item
    }
}