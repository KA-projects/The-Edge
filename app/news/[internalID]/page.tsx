import { fakeNewsDetail } from "@/data/fakeNewsDetail";
import { fetchNewsDetailByInternalID } from "@/data/fetchData";
import NavbarOfNewsDetail from "@/layers/NewsDetail/components/NavbarOfNewsDetail";

import NewsDetail from "@/layers/NewsDetail/components/NewsDetail";

import React from "react";

const Page = ({ params }: { params: { internalID: string } }) => {
  // fetch data by internalID from Rapid API
  // const newsDetail = fetchNewsDetailByInternalID(params.internalID)

  return (
    <div style={{ colorScheme: "light" }}>
      <NavbarOfNewsDetail />
      <main>
        <NewsDetail newsDetail={fakeNewsDetail} />
      </main>
    </div>
  );
};

export default Page;
