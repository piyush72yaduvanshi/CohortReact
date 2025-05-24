import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const Chai = (props) => {
  console.log(props);
  
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.cost),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Chai Variation by Piyush Yadav"),
      React.createElement(Chai ,
        {
          name: "Masala Chai",
          cost: "Rs. 100",
        }
      ),
      React.createElement(Chai,
        {
        name: "Ginger Chai",
        cost: "Rs. 120",
      }),
      React.createElement(Chai,{
        name: "Cardamom Chai",
        cost: "Rs. 150",
      }),
      React.createElement(Chai,{
        name: "Black Chai",
        cost: "Rs. 180",
      }),
    ]
  );
};

const container = document.getElementById("root");
console.log(container);
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
