import React from "react";
import { useState, useEffect } from "react";

function InfiniteScroll() {
    const [toLoad, setToLoad] = useState(true);
    const [tableNumber, setTableNumber] = useState(1);
    const [data, setData] = useState([]);
    const api = (value) => {
        const table = [];
        for (let i = 0; i < 20; i++) {
            table.push(value * i);
        }
        return Promise.resolve(table);
    };
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.pageYOffset > document.body.offsetHeight - 2) {
            setToLoad(true);
        }
    });
    useEffect(() => {
        if (toLoad) {
            api(tableNumber).then((res) => {
                setData((prev) => [...prev, ...res]);
            });
            setTableNumber((tableNumber) => tableNumber + 1);
            setToLoad(false);
        }
    }, [toLoad]);
    const ShowTable = (props) => {
        const value = props.data.map((value, index) => {
            console.log(value);
            return (
                <>
                    <h1>{value}</h1>
                    <br />
                </>
            );
        });
        return value;
    };
    return (
        <div>
            InfiniteScroll
            <ShowTable data={data} />
        </div>
    );
}

export default InfiniteScroll;
