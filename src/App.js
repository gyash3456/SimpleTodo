import logo from "./logo.svg";
import "./App.css";
import BasicCounter from "./BasicCounter";
import { Todo1Creater } from "./Todo1Creater";
import { Memo } from "./Memo";
import { Debounce } from "./DebounceThrottle/Debounce";
import { Back } from "./../src/BackButton/Back";
import InfiniteScroll from "./InfiniteScroll/InfiniteScroll";
import { Eventbubbling } from "./EventBubbling/Eventbubbling";
import { HOC } from "./HigherOrderComponent/HOC";
import OriginalComponent from "./HigherOrderComponent/OriginalComponent";
import TodoApp from "./TodoApp/TodoApp";
import TimerApp from "./TimerApp";

function App() {
    const Abc = HOC(OriginalComponent);
    return (
        <div className="App">
            {/* <BasicCounter></BasicCounter>
            <Todo1Creater></Todo1Creater>
            <Memo></Memo> */}
            {/* <Debounce /> */}
            {/* <Back/> */}
            {/* <InfiniteScroll /> */}
            {/* <Eventbubbling /> */}
            {/* <Abc value={5}></Abc> */}
            {/* <TodoApp /> */}
            <TimerApp />
        </div>
    );
}

export default App;
