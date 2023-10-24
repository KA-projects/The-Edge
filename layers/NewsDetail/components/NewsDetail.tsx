"use client";

import { NewsDetailProps } from "@/data/types/NewsDetail";
import React, { useEffect } from "react";
import useLightTheme from "../utils/hooks/useLightTheme";

const NewsDetail = ({ newsDetail }: NewsDetailProps) => {
  useLightTheme();
  // console.log(newsDetail);
  return <div>NewsDetail</div>;
};

export default NewsDetail;
