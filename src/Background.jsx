import { useState } from "react";
import stylesheet from "./Background.module.css";

function Background() {
  const [color, setColor] = useState(["white", "black"]);
  const combination = {
    red: "blue",
    blue: "red",
    pink: "white",
    green: "red",
    orange: "blue",
    black: "white",
    white: "black",
  };

  const changeColor = (e) => {
    let colorArr = [e.target.name, combination[e.target.name]];
    setColor(colorArr);
  };
  return (
    <div class={stylesheet.main} style={{ background: `${color[0]}` }}>
      <h1 class={stylesheet.heading} style={{ color: `${color[1]}` }}>
        This is the Background changer Project
      </h1>
      <div class={stylesheet.btnBack}>
        <button
          name="red"
          class={stylesheet.btn}
          style={{ background: "red" }}
          onClick={(e) => {
            changeColor(e);
          }}
        >
          Red
        </button>
        <button
          name="blue"
          class={stylesheet.btn}
          style={{ background: "blue" }}
          onClick={(e) => changeColor(e)}
        >
          Blue
        </button>
        <button
          name="green"
          class={stylesheet.btn}
          style={{ background: "green" }}
          onClick={(e) => changeColor(e)}
        >
          Green
        </button>
        <button
          name="pink"
          class={stylesheet.btn}
          style={{ background: "pink" }}
          onClick={(e) => changeColor(e)}
        >
          Pink
        </button>
        <button
          name="orange"
          class={stylesheet.btn}
          style={{ background: "orange" }}
          onClick={(e) => changeColor(e)}
        >
          Orange
        </button>
        <button
          name="black"
          class={stylesheet.btn}
          style={{ background: "black", color: "white" }}
          onClick={(e) => changeColor(e)}
        >
          Black
        </button>
        <button
          name="white"
          class={stylesheet.btn}
          style={{ background: "white" }}
          onClick={(e) => changeColor(e)}
        >
          Default
        </button>
      </div>
    </div>
  );
}

export default Background;
