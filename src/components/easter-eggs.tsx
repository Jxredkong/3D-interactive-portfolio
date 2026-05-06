"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect, useState } from "react";
import NyanCat from "./nyan-cat";
import { AnimatePresence } from "framer-motion";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();
  useEffect(() => {
    if (!isDevToolsOpen) return;
    // console.log(
    //   "%cWhoa, look at you! 🕵️‍♂️\n\n" +
    //     "Peeking under the hood, eh? Just be careful, " +
    //     "you might find some 🐛 bugs that even I didn't know about! 😅\n\n" +
    //     "By the way, did you know the console is a portal to another dimension? 🌌 " +
    //     "Just kidding... or am I? 👽\n\n" +
    //     "Keep exploring, brave soul! 🛠️",
    //   "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
    // );
    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%c🌌 Welcome, traveler.\n" +
          "Whisper my name into the void and the stars will answer.\n" +
          "Try typing %cmy first name%c and pressing enter.",
        "color: #E6F1FF; font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #0b1026, #1a1a40); padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #67E8F9; font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #0b1026, #1a1a40); padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #E6F1FF; font-size: 16px; font-weight: bold; background: linear-gradient(90deg, #0b1026, #1a1a40); padding: 10px; border-radius: 10px;"
      );

      ["jared", "Jared", "JARED"].forEach((name) => {
        // @ts-ignore
        if (Object.hasOwn(window, name)) return;
        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c🚀 Signal detected. Decoding constellation...\n\n" +
                "  ✦ Identity: Jared Kong — full-stack & agentic AI engineer\n" +
                "  ✦ Currently: orchestrating multi-agent networks in TypeScript @ Voltade\n" +
                "  ✦ Trophy case: 1× hackathon gold, 1× bronze\n" +
                "  ✦ Status: open to new-grad SWE roles\n\n" +
                "  → hire signal acknowledged: thejaredkong@gmail.com",

              "color: #E6F1FF; font-size: 15px; font-weight: bold; background: linear-gradient(135deg, #0b1026, #1a1a40, #2a1a5e); padding: 12px; border-radius: 10px; margin-top:10px; border: 1px solid #67E8F9"
            );

            const timer = setTimeout(() => {
              console.log(
                "%c✨ Pssst, fellow stargazer...\n\n" +
                  "If you like cats, press 'n' on the viewport and watch the cosmos purr. 🐱🌠",
                "color: #C4B5FD; font-size: 14px; font-weight: bold; background: linear-gradient(90deg, #0b1026, #1a1a40); padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 7000);
            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
