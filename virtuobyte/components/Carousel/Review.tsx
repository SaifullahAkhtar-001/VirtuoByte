import React from "react";

interface Props {
  by: string;
  children: React.ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => {
  return (
    <div className="flex flex-col justify-center text-center min-[550px]:px-5 md:px-10 lg:px-20">
      <div className="text-[17px] ">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6">&mdash; {by}</div>
    </div>
  );
};

export default Review;