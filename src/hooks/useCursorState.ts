import { useState } from "react";

export type CursorState = {
  hover?: boolean;
  vScroll?: boolean;
  hScroll?: boolean;
};

export const useCursorState = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    hover: false,
    vScroll: false,
    hScroll: false,
  });

  function setHover() {
    setCursorState({
      hover: true,
      vScroll: false,
      hScroll: false,
    });
  }

  function setVScroll() {
    setCursorState({
      hover: false,
      vScroll: true,
      hScroll: false,
    });
  }

  function setHScroll() {
    setCursorState({
      hover: false,
      vScroll: false,
      hScroll: true,
    });
  }

  function clearState() {
    setCursorState({
      hover: false,
      vScroll: false,
      hScroll: false,
    });
  }
  return { cursorState, setHover, setVScroll, setHScroll, clearState };
};
