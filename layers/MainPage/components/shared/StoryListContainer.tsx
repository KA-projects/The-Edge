import React from "react";

const StoryListContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-container-lg mx-auto w-full px-2 lg:px-0">
      {children}
    </div>
  );
};

export default StoryListContainer;
