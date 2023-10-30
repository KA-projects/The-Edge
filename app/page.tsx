import React from "react";

import Hero from "@/layers/MainPage/components/Hero";
import MainNavbar from "@/layers/Root/components/shared/MainNavbar";

// import { fetchNewsDetailByInternalID, fetchNewsList } from "@/data/fetchData";

//data from the Rapid Api copied to locale file
import { fakeNewsList } from "@/data/fakeNewsList";
import Border from "@/layers/Root/components/shared/Border";
import Story from "@/layers/Root/components/cards/Story";
import StoryListContainer from "@/layers/MainPage/components/shared/StoryListContainer";
import StickyStoryList from "@/layers/Root/components/cards/StickyStoryList";
import StoryPackage from "@/layers/Root/components/entities/StoryPackage";
import FeaturedStories from "@/layers/Root/components/entities/FeaturedStories";
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
            stories={haveMoreFiveStories[1]}
            storyForHero={null}
            isHero={true}
          />

          <StickyStoryList
            title="most popular"
            titleColor="text-blurpre"
            bgColor="bg-blurpre/90"
            textColor="text-white"
            borderColor="border-b-franklin"
            bgIndexColor="bg-black/50"
            textIndexColor="text-white"
            stories={haveMoreFiveStories[3]}
            isLocatedOnNewsDetailPage={false}
          />
        </StoryListInnerContainer>

        <Border />

        <StoryListInnerContainer>
          <StoryPackage
            stories={haveMoreFiveStories[4]}
            storyForHero={haveMoreFiveStories[4]}
            isHero={false}
          />
          <StickyStoryList
            title="just for you"
            titleColor="text-blurpre"
            bgColor="bg-franklin/90"
            textColor="text-black"
            borderColor="border-b-blurpre"
            bgIndexColor="bg-blurpre"
            textIndexColor="text-franklin"
            stories={haveMoreFiveStories[2]}
            isLocatedOnNewsDetailPage={false}
          />
        </StoryListInnerContainer>
        <Border />

        <StoryListInnerContainer>
          <StoryPackage
            stories={haveMoreFiveStories[2]}
            storyForHero={haveMoreFiveStories[2]}
            isHero={false}
          />
          <StickyStoryList
            title="podcasts"
            titleColor="text-blurpre"
            bgColor="bg-pernod/90"
            textColor="text-black"
            borderColor="border-b-black"
            bgIndexColor="bg-black"
            textIndexColor="text-white"
            stories={haveMoreFiveStories[4]}
            isLocatedOnNewsDetailPage={false}
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
