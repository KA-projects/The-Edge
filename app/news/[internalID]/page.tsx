import { fakeNewsDetail } from "@/data/fakeNewsDetail";
import { fetchNewsDetailByInternalID } from "@/data/fetchData";
import NavbarOfNewsDetail from "@/layers/NewsDetail/components/shared/NavbarOfNewsDetail";

import NewsDetail from "@/layers/NewsDetail/components/entities/NewsDetail";

import React from "react";
import { fakeNewsDetailTwo } from "@/data/fakeNewsDetailTwo";

const Page = ({ params }: { params: { internalID: string } }) => {
  // fetch data by internalID from Rapid API
  // const newsDetail = fetchNewsDetailByInternalID(params.internalID);

  return (
    <div>
      <NavbarOfNewsDetail />
      <main className="px-5">
        <NewsDetail newsDetail={fakeNewsDetailTwo} />
        <div className="bg-red-500 h-[500px]"> footer</div>
      </main>
    </div>
  );
};

export default Page;
