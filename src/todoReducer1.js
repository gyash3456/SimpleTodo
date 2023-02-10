import React from "react";
export const ACTIONS = {
    ADDTODO: "add-todo",
    DELETETODO: "delete-todo",
    TOGGLE: "toggle-todo",
};
const formTodo = (name) => {
    return { id: Date.now(), name: name, isDone: false };
};

export const todoReducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADDTODO:
            console.log(action.payload);
            return [...todos, formTodo(action.payload)];

        case ACTIONS.TOGGLE:
            return todos.map((todo) => {
                console.log(todo.id);
                console.log(action.payload.id);
                if (todo.id === action.payload.id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            });
        case ACTIONS.DELETETODO:
            return todos.filter((todo) => {
                return todo.id !== action.payload.id;
            });

        default:
            return todos;
    }
};
