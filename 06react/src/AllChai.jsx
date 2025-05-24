import { useState, useEffect } from "react";

export function ChaiMenu() {
  const [chaiMenu, setChaiMenu] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers")
      .then(response => response.json())
      .then(data => setChaiMenu(data.data.data))
      .catch(() => setError());
  }, []);
  return (
    <div>
      <h1>Chai Menu</h1>
      {chaiMenu.map((chai, index) => (
        <li key={index}>{`${chai.name.first} ${chai.name.last}`}</li>
      ))}
    </div>
  );
}
