import Image from "next/image";
import React from "react";
import { ImagePart } from "../types";

const ImageContent = ({ id, imageURLs }: Omit<ImagePart, "role">) => {
  return (
    <div className="relative">
      <Image src={imageURLs.default} alt="image" width={600} height={400} />
    </div>
  );
};

export default ImageContent;
