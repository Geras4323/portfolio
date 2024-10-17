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

  const setHover = () => {
    setCursorState({
      hover: true,
      vScroll: false,
      hScroll: false,
    });
  };

  const setVScroll = () => {
    setCursorState({
      hover: false,
      vScroll: true,
      hScroll: false,
    });
  };

  const setHScroll = () => {
    setCursorState({
      hover: false,
      vScroll: false,
      hScroll: true,
    });
  };

  const clearState = () => {
    setCursorState({
      hover: false,
      vScroll: false,
      hScroll: false,
    });
  };

  return { cursorState, setHover, setVScroll, setHScroll, clearState };
};
