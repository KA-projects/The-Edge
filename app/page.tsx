import React from "react";

import Content from "@/layers/MainPage/components/Content";
import Navbar from "@/layers/MainPage/components/Navbar";

// import { fetchNewsDetailByInternalID, fetchNewsList } from "@/data/fetchData";

//data from the Rapid Api copied to locale file
import { fakeNewsList } from "@/data/fakeNewsList";
// import { fakeNewsDetail } from "@/data/fakeNewsDetail";

const Home = async () => {
  //data from the Rapid Api
  // const dataNewsList = await fetchNewsList();
  // const dataNewsDetail = await fetchNewsDetailByInternalID("S2A5AWT1UM0W01");

  const dataNewsList = fakeNewsList.modules;

  return (
    <div>
      <Navbar />
      <Content news={dataNewsList[0]} />
      UnderLine
    </div>
  );
};

export default Home;
