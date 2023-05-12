import React from "react";
import { useState, useEffect } from "react";
import { createBrowserHistory } from "history";

export const Back = () => {
    let history = createBrowserHistory();
    const [buttonState, setButtonState] = useState("");
    const [previousState, setPreviousState] = useState("");

    const handleButton = (value) => {
        setPreviousState(buttonState);
        setButtonState(value);
        history.push(window.location.href, buttonState);
        // console.log(history.location.state);
    };
    window.addEventListener("popstate", (e) => {
        console.log(e);
    });
    useEffect(() => {
        console.log(history.action, window.location.href);
        if (history.action === "POP") {
            console.log(history.location.state);
        }
    }, [history.action]);

    return (
        <>
            <div>Back</div>
            <button
                onClick={() => {
                    handleButton(1);
                }}
            >
                1
            </button>
            <button
                onClick={() => {
                    handleButton(2);
                }}
            >
                2
            </button>
            <h1>{buttonState}</h1>
            {/* <h2>{previousState}</h2> */}
        </>
    );
};

export default Back;
