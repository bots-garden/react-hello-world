function HookExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0)

  // React.useState(0): import React, { useEffect, useState } from "react";

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}