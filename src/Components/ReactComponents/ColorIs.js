import React, { useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("red");
    
  return (
    <div>
      My favorite color is {color}.&nbsp;&nbsp;
      <button type="button" onClick={() => setColor("blue")} >Blue </button>
      <button type="button" onClick={() => setColor("red")}  >Red  </button>
      <button type="button" onClick={() => setColor("pink")} >Pink </button>
      <button type="button" onClick={() => setColor("green")}>Green</button>
    </div>
  );
}
