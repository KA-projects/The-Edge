"use client";

import { NewsProps } from "@/data/types/NewsListProps";
import React from "react";

const Content = ({ news }: NewsProps) => {
  console.log(news);

  return <div>Content</div>;
};

export default Content;
