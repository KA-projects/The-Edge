import React from "react";

import Hero from "@/layers/MainPage/components/Hero";
import MainNavbar from "@/layers/Root/components/MainNavbar";

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
    <main>
      <MainNavbar />
      <Hero newsList={dataNewsList} />

      <StoryListContainer>
        <Border />
        <StoryListInnerContainer>
          <StoryPackage
            story={haveMoreFiveStories[1]}
            storyForHero={null}
            isHero={true}
          />

          <StoryList
            title="most popular"
            bgColor="bg-blurpre/90"
            textColor="text-white"
            borderColor="border-b-franklin"
            bgIndexColor="bg-black/50"
            textIndexColor="text-white"
            story={haveMoreFiveStories[3]}
          />
        </StoryListInnerContainer>

        <Border />

        <StoryListInnerContainer>
          <StoryPackage
            story={haveMoreFiveStories[4]}
            storyForHero={haveMoreFiveStories[4]}
            isHero={false}
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
            isHero={false}
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
    </main>
  );
};

export default Home;
