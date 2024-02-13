import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMousePositionChange = (e) => {
            // Use e.clientX and e.clientY to access the mouse position on the screen
        };

        window.addEventListener("mousemove", handleMousePositionChange);

        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };
    }, []);

    // What should be returned here?
    return null;
};
const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        });

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                // Use e.clientX and e.clientY to access the mouse position on the screen
                setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener("mousemove", handleMousePositionChange);

            return () => {
                window.removeEventListener("mousemove", handleMousePositionChange);
            };
        }, []);
        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };
};

// This component should not receive any props
const PanelMouseLogger = ({ mousePosition }) => {
    // The below if statement can be removed after the render props pattern is implemented
    console.log(mousePosition);
    if (!mousePosition) {
        return null;
    }
    return (
        <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    );
};

// This component should not receive any props
const PointMouseLogger = ({ mousePosition }) => {
    // The below if statement can be removed after the render props pattern is implemented
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    );
};
const WrapperComponent = withMousePosition(PanelMouseLogger);
function App() {
    return (
        <div className="App">
            <header className="Header">Little Lemon Restaurant 🍕</header>
            <WrapperComponent />
            <PointMouseLogger />
        </div>
    );
}

export default App;
