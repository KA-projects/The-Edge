import React from "react";

const StoryListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-container-lg mx-auto md:max-w-[560px] w-full px-2 lg:px-0 lg:max-w-container-lg">
      {children}
    </div>
  );
};

export default StoryListContainer;
