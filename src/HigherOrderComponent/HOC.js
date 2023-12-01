import React, { useState } from "react";

export const HOC = (WrappedComponent) => {
    const [variable, setVariable] = useState(5);
    return (originalProps) => {
        return <WrappedComponent injectedProps={variable} {...originalProps} />;
    };
};
