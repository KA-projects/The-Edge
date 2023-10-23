import React from "react";

import Hero from "@/layers/MainPage/components/Hero";
import Navbar from "@/layers/MainPage/components/Navbar";

// import { fetchNewsDetailByInternalID, fetchNewsList } from "@/data/fetchData";

//data from the Rapid Api copied to locale file
import { fakeNewsList } from "@/data/fakeNewsList";
import Border from "@/layers/MainPage/components/shared/Border";
import Story from "@/layers/MainPage/components/cards/Story";
import StoryListContainer from "@/layers/MainPage/components/shared/StoryListContainer";
import StoryList from "@/layers/MainPage/components/cards/StoryList";
import StoryPackage from "@/layers/MainPage/components/cards/StoryPackage";
import HeroTitle from "@/layers/MainPage/components/entities/HeroTitle";
import StoryListInnerContainer from "@/layers/MainPage/components/shared/StoryListInnerContainer";
// import { fakeNewsDetail } from "@/data/fakeNewsDetail";

const Home = async () => {
  //data from the Rapid Api
  // const dataNewsList = await fetchNewsList();
  // const dataNewsDetail = await fetchNewsDetailByInternalID("S2A5AWT1UM0W01");

  const dataNewsList = fakeNewsList.modules;

  const haveMoreFiveStories = dataNewsList.filter(
    (news) => news.stories.length >= 5
  );

  return (
    <div>
      <Navbar />
      <Hero newsList={dataNewsList} />
      <div className="h-[400px] overflow-scroll m-auto border border-rose-400">
        <div>23123132</div>
        <div>23123132</div>
        <div>23123132</div>
        <div>23123132</div>
        <div>23123132</div>
        <div
          style={{ position: "sticky", top: "0" }}
          className=" sticky top-2 min-h-[40px] h-4 bg-slate-500"
        >
          123
        </div>
        <div>5555555</div>
        <div className="h-[2000px]">23123132</div>
        <div>5555555</div>
        <div>5555555</div>
        <div>5555555</div>
        <div>5555555</div>
        <div>5555555</div>
      </div>
      <StoryListContainer>
        <Border />

        <StoryListInnerContainer>
          <StoryPackage story={haveMoreFiveStories[1]} storyForHero={null} />
          <div className="flex-1 flex flex-col self-stretch">
            <StoryList
              title="most popular"
              bgColor="bg-blurpre/90"
              textColor="text-white"
              borderColor="border-b-franklin"
              bgIndexColor="bg-black/50"
              textIndexColor="text-white"
              story={haveMoreFiveStories[3]}
            />
          </div>
        </StoryListInnerContainer>

        <Border />

        <StoryListInnerContainer>
          <StoryPackage
            story={haveMoreFiveStories[4]}
            storyForHero={haveMoreFiveStories[4]}
          />
          <StoryList
            title="just for you"
            bgColor="bg-franklin/90"
            textColor="text-black"
            borderColor="border-b-blurpre"
            bgIndexColor="bg-blurpre"
            textIndexColor="text-franklin"
            story={haveMoreFiveStories[2]}
          />
        </StoryListInnerContainer>
        <Border />

        <StoryListInnerContainer>
          <StoryPackage
            story={haveMoreFiveStories[2]}
            storyForHero={haveMoreFiveStories[2]}
          />
          <StoryList
            title="podcasts"
            bgColor="bg-pernod/90"
            textColor="text-black"
            borderColor="border-b-black"
            bgIndexColor="bg-black"
            textIndexColor="text-white"
            story={haveMoreFiveStories[4]}
          />
        </StoryListInnerContainer>
      </StoryListContainer>
      <Border />
      <Border />
      <Border />
      <Border />
    </div>
  );
};

export default Home;
