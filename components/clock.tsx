import { useState, useEffect } from "react";

export function Clock() {
  // 1. Initialize state with the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // 2. Set up an interval to update the time every 1000 milliseconds (1 second)
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 3. Clean up the interval when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // 4. Render the formatted time in "03/01/2025, 11:54:20 PM IST" format
  const formattedTime = currentTime
    .toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  return `${formattedTime} IST.`;
}
