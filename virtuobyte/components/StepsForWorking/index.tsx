"use client";
import React, { useState } from "react";
import StepsData from "./steps";
import { Steps } from "@/types/steps";
import { BiDownArrowAlt } from "react-icons/bi";

import { BiUpArrowAlt } from "react-icons/bi";
const Index = () => {
  const [showDescriptions, setShowDescriptions] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleDescription = (stepId: number) => {
    setShowDescriptions((prevState) => ({
      ...prevState,
      [stepId]: !prevState[stepId],
    }));
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-[1.5rem] flex-1">
        <div className="text-[28px] font-[600]">
          The VirtuoByte Solution Journey in 5 Comprehensive Steps!
        </div>
        <div className="text-[15px] word-break">
          Embark on a seamless and structured journey with Virtuobyte as we
          guide your business to conquer web, software, and IT challenges. Our
          meticulously crafted five-step process is your compass to precision
          and unwavering care, ensuring that every aspect of your needs is not
          just met, but masterfully attended to.
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-[1.5rem]">
        {StepsData &&
          StepsData.map((steps: Steps) => (
            <div className="group" key={steps.id}>
              <div
                className={`border-b flex items-center justify-between font-[500] text-[20px] group-hover:dark:border-gray-400 group-hover:border-gray-600 transition duration-300 ease-in-out group-hover:dark:text-gray-400 group-hover:text-gray-600 cursor-pointer dark:border-white border-black ${
                  showDescriptions[steps.id]
                    ? "text-gray-600 dark:text-gray-400  dark:border-gray-400 border-gray-600"
                    : ""
                } `}
                onClick={() => toggleDescription(steps.id)}
              >
                {steps.title}
                {showDescriptions[steps.id] ? (
                  <BiUpArrowAlt />
                ) : (
                  <BiDownArrowAlt />
                )}
              </div>
              {showDescriptions[steps.id] && (
                <div
                  className={`text-gray-600 dark:text-gray-400   transition duration-300 ease-in-out word-break  ${
                    showDescriptions[steps.id] ? "" : ""
                  } `}
                >
                  {steps.desc}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
