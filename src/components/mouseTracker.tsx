import { type CursorState } from "@/hooks/useCursorState";
import { cn } from "@/utils/lib";
import { type Point2D } from "@/utils/types";
import { useEffect, useRef, useState } from "react";

export const MouseTracker = ({
  state = { hover: false, hScroll: false, vScroll: false },
}: {
  state: CursorState;
}) => {
  const [hidden, setHidden] = useState(false);
  const [position, setPosition] = useState<Point2D>({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: globalThis.MouseEvent) => {
    setPosition({
      x: e.clientX - (elementRef.current?.clientWidth ?? 1) / 2,
      y: e.clientY - (elementRef.current?.clientHeight ?? 1) / 2,
    });
  };

  const toggleTracker = () => {
    setHidden((prev) => !prev);
  };

  useEffect(() => {
    if (elementRef.current) {
      window.addEventListener("mousemove", updateMousePosition);
      document.addEventListener("blur", toggleTracker);
      document.addEventListener("focus", toggleTracker);
    }
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("blur", toggleTracker);
      document.removeEventListener("focus", toggleTracker);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(hidden && "hidden", "pointer-events-none fixed z-50")}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className={cn(
          !!state.hover && "size-7",
          !!state.hScroll && "h-2.5 w-10",
          !!state.vScroll && "h-10 w-2.5",
          "relative grid size-5 place-content-center rounded-full bg-[#595959]/80 fill-current transition-all",
        )}
      >
        {/* HOVER */}
        {/* <div
          className={cn(
            !!state.hover
              ? "opacity-100"
              : !!state.vScroll || !!state.hScroll
                ? "opacity-0"
                : "opacity-70",
            "transition-opacity"
          )}
        >
          <div
            className={cn(
              // !!state.hover ? "border-2" : "border-3",
              "rounded-full rotate-45 animate-[spin_1s_linear_infinite] border-2 size-7 border-t border-x-transparent border-b-transparent border-white"
            )}
          />
        </div> */}

        {/* SCROLL */}
        <div
          className={cn(
            !!state.hScroll || !!state.vScroll
              ? "opacity-100 delay-100"
              : "opacity-0",
            !!state.hScroll && "animate-sideways",
            !!state.vScroll && "animate-upways",
            "absolute left-0 top-0 size-2.5 rounded-full bg-white transition-opacity",
          )}
        />
      </div>
    </div>
  );
};
