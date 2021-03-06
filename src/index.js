import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Counter } from "./App";
import * as serviceWorker from "./serviceWorker";

const counters = [
  {
    buttonColor: "white",
    onClick: (counter) => console.log("За Навального ", counter),
  },
  {
    buttonColor: "blue",
    onClick: (counter) => console.log("За Путина ", counter),
  },
  {
    buttonColor: "red",
    onClick: (counter) => console.log("За Собчак ", counter),
  },
];

const names = ["Аня", "Катя", "Нина"];

ReactDOM.render(
  <React.StrictMode>
    {counters.map((props, i) => (
      <Counter {...props} key={i} />
    ))}
    {names.map((name, i) => {
      return <div key={i}>{name}</div>;
    })}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
