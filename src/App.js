import logo from "./logo.svg";
import "./App.css";
import BasicCounter from "./BasicCounter";
import Todo from "./Todo";
import { Todo1Creater } from "./Todo1Creater";

function App() {
    return (
        <div className="App">
            <BasicCounter></BasicCounter>
            <Todo1Creater></Todo1Creater>
        </div>
    );
}

export default App;
