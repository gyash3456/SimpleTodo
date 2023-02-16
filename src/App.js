import logo from "./logo.svg";
import "./App.css";
import BasicCounter from "./BasicCounter";
import { Todo1Creater } from "./Todo1Creater";
import { Memo } from "./Memo";

function App() {
    return (
        <div className="App">
            <BasicCounter></BasicCounter>
            <Todo1Creater></Todo1Creater>
            <Memo></Memo>
        </div>
    );
}

export default App;
