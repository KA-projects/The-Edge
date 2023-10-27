import React from "react";
import { TextPart } from "../types";

const TextContent = ({ role, parts, index }: TextPart & { index: number }) => {
  if (role === "h2") {
    return (
      <div className="pt-4">
        <div className="w-[65px] h-[22px] bg-franklin"></div>
        <h2 className="text-3xl font-bold mt-2 mb-4">
          {parts.map((part) => (
            <>{part.text} </>
          ))}
        </h2>
      </div>
    );
  }

  if (role === "p") {
    return (
      <p
        className={`my-4 ${
          index === 0 || index === 1 ? "text-[22px]" : " text-lg"
        }`}
      >
        {parts.map((part) => (
          <>
            {index === 0 ? (
              <>
                <span className="text-6xl font-bold">
                  {part.text?.charAt(0)}
                </span>
                <span className="">{part.text?.slice(1)}</span>
              </>
            ) : (
              part.text
            )}
          </>
        ))}
      </p>
    );
  }
  //   return null;
};

export default TextContent;
