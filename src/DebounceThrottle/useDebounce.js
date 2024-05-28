import React from "react";

const useDebounce1 = (str, delay = 1000) => {
  const [text, setText] = React.useState(str); //1
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setText(str);
    }, delay);
    return () => clearTimeout(timeout); //2
  });
  return text; //3
};
//line 1 runs only first time when the page loads,never after that.
//each time str in parent component is changed the whole component reruns
//line 3 returns the last text set since setText is never called.
//since text is a useState therefore it will not change and don't re-render the component
//what is the role of line 2
//if we don't write line 2 each time useEffect is called a new settime out is created
//and all the settimeout will continously fire after 1 second.
//but when we write clearTimeOut every time new useEffect is called it clears previous timeout
//until last timeout when cleartimeout is not called and last timeout waits for delay.
//as soon as last timeout is called setTimout set the state and the parent component is re-rendered to
//show the effect.
export default useDebounce1;
