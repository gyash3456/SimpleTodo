import React from "react";
import { ACTIONS } from "./todoReducer1";

export const Todo1 = ({ todo, dispatch }) => {
    const handleToggle = () => {
        dispatch({
            type: ACTIONS.TOGGLE,
            payload: { id: todo.id },
        });
        console.log(todo.isDone);
    };
    const handleDelete = () => {
        dispatch({
            type: ACTIONS.DELETETODO,
            payload: { id: todo.id },
        });
    };
    return (
        <div>
            <span style={{ color: todo.isDone ? "#AAA" : "#000" }}>{todo.name}</span>
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};
