import {v4 as uuid } from 'uuid'

export const initialState = [
    {
        title: "this is from reducer",
        completed: false,
        id: uuid()
    },
]

export const todoReducer = (state,action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                title: action.payload,
                completed: false,
                id: uuid()
                }];
        case "TOGGLE_COMPLETE":
            console.log(action.payload)
            return state.map(todo => {
                    return todo.id == action.payload ? { ...todo, completed: !todo.completed} : todo
                })
        case "DELETE_TODO": 
            return state.filter(todo => todo.completed === false)
        default:
            return state
    }
}