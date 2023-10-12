import React, { useEffect, useState } from "react";

export const useCommentsCount = () => {
  const [commentCount, setCommentCount] = useState(0);

  useEffect(() => {
    const count = Math.floor(40 * Math.random());
    setCommentCount(count);
  }, []);
  return commentCount;
};
