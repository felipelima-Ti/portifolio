"use client";
import React, { useEffect, useState } from "react";

export default function Typewriter({
  text = "",
  speed = 50,
  className = ""
}) {
  //efeito fade nos textos
  const [displayedText, setDisplayedText] = useState("");
  //c
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      className={`font-sans 
        text-lg
        leading-relaxed
        break-words 
        ${className}
      `}
    >
      {displayedText}
    </p>
  );
}