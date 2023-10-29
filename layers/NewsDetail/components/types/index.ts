export type TextPart = {
  role: "p" | "h2";
  parts: {
    role: "text";
    text: string;
  }[];
};

export type ImagePart = {
  id: string;
  role: "image";
  imageURLs: {
    default: string;
    large: string;
  };
};

export type ImageURLs = Pick<ImagePart, "imageURLs">;

export type WebviewPart = {
  role: "webview";
  html: string;
};

export type DetailComponents = TextPart | ImagePart | WebviewPart;
