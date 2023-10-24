import React from "react";

const StoryListInnerContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex relative w-full flex-col items-center lg:flex-row lg:items-start">
      {children}
    </div>
  );
};

export default StoryListInnerContainer;
