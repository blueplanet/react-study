import React from "react";
import ReactDOM from 'react-dom';

import Hello from "./components/hello";

function init() {
  const mountNode = document.getElementById("app");
  const component = (
    <Hello initializeName="gyo">
      <p>this is child</p>
    </Hello>
  );

  ReactDOM.render(component, mountNode);
}

document.addEventListener("DOMContentLoaded", init);
