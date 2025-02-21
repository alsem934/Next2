'use client'; // Required for client-side interactivity in Next.js

import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Use Next.js Link

const V3TeaserSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000); // Set target date to 12 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white py-10 md:py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-8">
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full md:w-auto m-2">
            <span className="text-2xl font-bold">{timeLeft.days}</span> Days
          </div>
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full md:w-auto m-2">
            <span className="text-2xl font-bold">{timeLeft.hours}</span> Hours
          </div>
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full md:w-auto m-2">
            <span className="text-2xl font-bold">{timeLeft.minutes}</span> Minutes
          </div>
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg w-full md:w-auto m-2">
            <span className="text-2xl font-bold">{timeLeft.seconds}</span> Seconds
          </div>
        </div>

        <Link href="/event3" passHref>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default V3TeaserSection;
