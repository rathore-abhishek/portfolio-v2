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

  // 4. Render the formatted time in "9:03:43 PM IST" format
  const formattedTime = currentTime.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return `${formattedTime} IST.`;
}
