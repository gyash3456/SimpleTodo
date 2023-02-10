import React, { useReducer, useState } from "react";
import { Todo1 } from "./Todo1";
import { todoReducer } from "./todoReducer1";
import { ACTIONS } from "./todoReducer1";

export const Todo1Creater = () => {
    const [name, setName] = useState("");
    const [todos, dispatch] = useReducer(todoReducer, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTIONS.ADDTODO,
            payload: name,
        });
        setName("");
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            </form>
            {todos.map((value, index) => {
                return <Todo1 todo={value} dispatch={dispatch}></Todo1>;
            })}
        </div>
    );
};
