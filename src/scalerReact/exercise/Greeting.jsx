// import React from "react";

function Greeting(obj) {
  // write the logic here to receive the props

  return (
    <h1>
      Hello {obj.name} Thanks Babel :) is {obj.age} old and works as{" "}
      {obj.occupation}
    </h1>
  );
}

export default Greeting;
