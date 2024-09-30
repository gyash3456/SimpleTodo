import React, { useReducer, useState } from "react";
import { todoReducer } from "./Reducer";

const TodoApp = () => {
  const [todoList, dispatch] = useReducer(todoReducer, []);
  const [currentToDo, setCurrentTodo] = useState("");
  return (
    <div>
      <input
        type="text"
        value={currentToDo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: {
              id: new Date().getTime(),
              message: currentToDo,
            },
          })
        }
      >
        Add todo
      </button>
      {todoList.map((todo, index) => {
        return (
          <div>
            {todo.message}
            <button
              onClick={() => {
                dispatch({
                  type: "DELETE_TODO",
                  payload: {
                    id: todo.id,
                  },
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoApp;
