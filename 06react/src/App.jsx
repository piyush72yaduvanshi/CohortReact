import { useState, useEffect } from "react";
import { ChaiMenu } from "./AllChai";
import { ChaiOrder } from "./ChaiOrder";
import { useSpecailChai } from "./hooks/useSpecailChai";
export function App() {
  const { chai, loading, error } = useSpecailChai();
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setMessage(data.value))
      .catch(() => setMessage("Error"));
  }, []);

  return (
    <div>
      <h1>Chai Variation by Piyush Yadav</h1>
      <p>
        Chai is a popular Indian beverage made from black tea, milk, sugar, and
        spices.
      </p>
      <h2>{message}</h2>
      <ChaiMenu />
      <ChaiOrder />
      {chai && chai.name && (
        <h3>
          {chai.name.first} {chai.name.last}
        </h3>
      )}
    </div>
  );
}
