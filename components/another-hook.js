function AnotherHook() {
  // Declare a new state variable, which we'll call "count"
  const [thisIsMyString, addSmile] = React.useState("")

  // React.useState(0): import React, { useEffect, useState } from "react";

  return (
    <div>
      <p>This is my string: {thisIsMyString} </p>
      <button onClick={() => addSmile(thisIsMyString + "😃")}>
        Click me 😃
      </button>
    </div>
  );
}
