import React from "react";
import { DetailComponents, ImagePart, TextPart, WebviewPart } from "../types";
import TextContent from "../shared/TextContent";
import ImageContent from "../shared/ImageContent";
import StickyStoryList from "@/layers/MainPage/components/cards/StickyStoryList";
import { fakeNewsList } from "@/data/fakeNewsList";

const ArticleBody = ({ components }: { components: DetailComponents[] }) => {
  const dataNewsList = fakeNewsList.modules;

  const haveMoreFiveStories = dataNewsList.filter(
    (news) => news.stories.length >= 5
  );

  const isText = (
    detailComponents: DetailComponents
  ): detailComponents is TextPart => {
    return detailComponents.role === "p" || detailComponents.role === "h2";
  };

  const isImage = (
    detailComponents: DetailComponents
  ): detailComponents is ImagePart => {
    return detailComponents.role === "image";
  };

  const isWebView = (
    detailComponents: DetailComponents
  ): detailComponents is WebviewPart => {
    return detailComponents.role === "webview";
  };

  const htmlParser = (xmlString: string) => {
    // const doc = new DOMParser().parseFromString(xmlString, "text/html");

    return <div dangerouslySetInnerHTML={{ __html: xmlString }}></div>;
  };
  return (
    <div className="font-lora mt-6 lg:flex">
      <div className="md:ml-[100px] lg:mx-[100px] max-w-article-body">
        {components.map((component, index) => {
          if (isWebView(component)) {
            return (
              <div
                key={component.html.slice(0, 70)}
                className="[&_a:hover]:shadow-highlight-franklin [&_a]:shadow-underline-black "
              >
                {htmlParser(component.html)}
              </div>
            );
          }

          if (isText(component)) {
            return (
              <TextContent
                key={component.parts[0].text + index}
                role={component.role}
                parts={component.parts}
                index={index}
              />
            );
          }

          if (isImage(component)) {
            return (
              <ImageContent
                key={component.id}
                id={component.id}
                imageURLs={component.imageURLs}
              />
            );
          }

          return null;
        })}
      </div>

      <div className="max-w-[300px] max-h-[6000px] pt-[1300px] hidden lg:block">
        <StickyStoryList
          title="most popular"
          bgColor="bg-transparent"
          textColor="text-black"
          borderColor="border-b-blurpre"
          bgIndexColor="bg-white"
          textIndexColor="text-blurpre"
          story={haveMoreFiveStories[3]}
          isLocatedOnNewsDetailPage={true}
        />
      </div>
    </div>
  );
};

export default ArticleBody;
