import React from "react";
import { useEffect } from "react";

export const Eventbubbling = () => {
    useEffect(() => {
        const div = document.querySelector("div");
        const but = document.querySelector("button");
        div.addEventListener(
            "click",
            () => {
                console.log("div");
            },
            true
        );
        but.addEventListener(
            "click",
            () => {
                console.log("button");
            },
            true
        );
    }, []);

    return (
        <div>
            <button>Click Me</button>
        </div>
    );
};
