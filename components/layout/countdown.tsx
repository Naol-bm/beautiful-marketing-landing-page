"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-20T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 mb-8">
      <div>
        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {timeLeft.days || "0"}
        </div>
        <div className="text-gray-500 dark:text-gray-400">Days</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {timeLeft.hours || "00"}
        </div>
        <div className="text-gray-500 dark:text-gray-400">Hours</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {timeLeft.minutes || "00"}
        </div>
        <div className="text-gray-500 dark:text-gray-400">Minutes</div>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {timeLeft.seconds || "00"}
        </div>
        <div className="text-gray-500 dark:text-gray-400">Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
