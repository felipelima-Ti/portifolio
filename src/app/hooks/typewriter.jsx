"use client";
import React, { useEffect, useState } from "react";
// Componente de máquina de escrever
export default function Typewriter({
  texts = [],
  speed = 50,
  pause = 2000,
  className = ""
}) {
  //estados para controlar o texto
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[textIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, speed);
    } 
    else if (!isDeleting && displayedText.length === currentText.length) {
      // pausa antes de apagar
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } 
    else if (isDeleting && displayedText.length > 0) {
      // apagando
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
      }, speed / 2);
    } 
    else if (isDeleting && displayedText.length === 0) {
      // próximo texto
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentText, speed, pause, texts.length]);

  return (
    <p 
    translate="no"
    className={`font-sans text-lg  ${className}`}>
      <span className="">
        {displayedText}
        <span className="inline-block w-[2px] h-4 ml-1 bg-white shadow-[0_0_8px_#3b82f6] animate-blink"></span>
      </span>
    </p>
  );
}