import React from "react";

const DataFetcher = ({ render, url }) => {
    let data = [];
    if (url.contains("dessert")) {
        data = ["gulab jamum", "rasmalai", "dhoodh jalebi"];
    } else {
        data = ["malai chaap", "tandoor chaap", "hot chaap"];
    }
    return render(data);
};

export default DataFetcher;
