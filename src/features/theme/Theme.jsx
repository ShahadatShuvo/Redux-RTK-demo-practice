import React from "react";
import { useDispatch } from "react-redux";
import { chnagetextColor } from "./themeSlice";

function Theme() {
  const [color, setColor] = React.useState("white");
  console.log("Color: ", color);

  const dispatch = useDispatch();
  return (
    <div>
      <label htmlFor="">Color: </label>
      <input
        type="text"
        name=""
        id=""
        className="ms-3"
        onChange={(e) => setColor(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={()=> dispatch(chnagetextColor(color))}>Change Text Color</button>
    </div>
  );
} 

export default Theme;
