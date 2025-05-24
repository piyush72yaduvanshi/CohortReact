import { useState, useEffect } from "react";

export function useSpecailChai() {
  const [chai, setChai] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.data && Array.isArray(data.data.data)) {
          setChai(data.data.data[3]); 
        } else {
          throw new Error("Invalid data structure");
        }
      })
      .catch((err) => setError(err.message || "Something went wrong"))
      .finally(() => setLoading(false));
  });
  return { chai, loading, error };
}
