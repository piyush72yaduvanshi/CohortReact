import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hiii it piyush yadav 78")
  );
};

const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
