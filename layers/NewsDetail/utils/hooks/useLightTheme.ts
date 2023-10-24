import { useEffect } from "react";

const useLightTheme = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";

    return () => {
      document.body.style.backgroundColor = "initial";
      document.body.style.color = "initial";
    };
  }, []);
};

export default useLightTheme;
