import { useState, useEffect } from "react";

export default function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 500); // adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-gray-100 font-medium text-base">
      Loading<span className="inline-block w-4">{dots}</span>
    </p>
  );
}