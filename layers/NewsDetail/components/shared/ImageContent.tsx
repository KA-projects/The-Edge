import Image from "next/image";
import React from "react";
import { ImagePart } from "../types";

const ImageContent = ({ id, imageURLs }: Omit<ImagePart, "role">) => {
  return (
    <div className="relative">
      <Image
        src={imageURLs.large}
        alt="image"
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "100%",
          objectFit: "cover",
        }}
        sizes="(max-width:786px) 100vw,700px"
        width={600}
        height={400}
      />
    </div>
  );
};

export default ImageContent;
