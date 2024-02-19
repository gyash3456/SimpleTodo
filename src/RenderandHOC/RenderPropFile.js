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
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <MousePosition
      render={(mousePosition) => {
        return (
          <div className="BasicTracker">
            <p>Mouse position:</p>
            <div className="Row">
              <span>x: {mousePosition.x}</span>
              <span>y: {mousePosition.y}</span>
            </div>
          </div>
        );
      }}
    />
  );
};

// This component should not receive any props
const PointMouseLogger = ({ mousePosition }) => {
  // The below if statement can be removed after the render props pattern is implemented
  return (
    <MousePosition
      render={(mousePosition) => {
        return (
          <p>
            ({mousePosition.x}, {mousePosition.y})
          </p>
        );
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
//Note so basically render prop is used inside child component and provides a function to parent component
//so that by using that function (render) it can render anything inside child
//so the use of child is to provide a functionality and call render method and render content
//as the way as parent want.
//We can dynamically render any jsx inside child function using render prop
//functionality of parent is to provide jsx inside child.
//parent tells the child what to render in render props
