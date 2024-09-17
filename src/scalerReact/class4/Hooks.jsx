import React, { useCallback, useEffect, useState } from "react";

export const Hooks = () => {
  const [childArray, setChildArray] = useState([]);
  useEffect(() => {
    console.log("added child");
    setChildArray((prev) => {
      const arr = [...prev];
      arr.push(1, 2, 3);
      console.log(arr);
      return arr;
    });
  }, []);

  /********************************************************************************************/
  //wrong approach
  //   const handleRemove = useCallback(
  //     (x) => {
  //       const newarray = childArray.filter((id) => id != x);
  //       console.log(newarray);
  //       setChildArray(newarray);
  //     },
  //     [childArray]
  //   );
  /* --------------------------------------------------------------------------------------------*/
  //correct approach

  const handleRemove = useCallback((x) => {
    setChildArray((prev) =>
      prev.filter((id) => id.toString() !== x.toString())
    );
  }, []);

  return (
    <div>
      hooks
      {childArray.map((id) => {
        return <Child number={id} handleRemove={handleRemove} key={id} />;
      })}
    </div>
  );
};
export const Child = React.memo(({ number, handleRemove }) => {
  useEffect(() => {
    console.log(`I am in child ${number}`);
  });
  return (
    <h3>
      I am child{number}{" "}
      <button onClick={() => handleRemove(number)}>Remove</button>
    </h3>
  );
});
