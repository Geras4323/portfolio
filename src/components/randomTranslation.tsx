import { cn } from "@/utils/lib";
import type { WithChildren, WithClassName } from "@/utils/types";
import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const RandomTranslation = ({
  className,
  children,
  boundsRef,
}: WithClassName & WithChildren & { boundsRef: RefObject<HTMLDivElement> }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  function getRandomIncrement() {
    const stepSize = 5; // Adjust the step size for smoother or more abrupt movements
    return (Math.random() < 0.5 ? -1 : 1) * stepSize;
  }

  const updatePosition = useCallback(() => {
    if (!boundsRef.current || !elementRef.current) return;

    setPosition((prevPosition) => {
      const newX = prevPosition.x + getRandomIncrement();
      const newY = prevPosition.y + getRandomIncrement();

      return {
        x:
          newX > 0 &&
          newX <
            (boundsRef.current?.clientWidth ?? 0) -
              (elementRef.current?.clientWidth ?? 0)
            ? newX
            : prevPosition.x,
        y:
          newY > 0 &&
          newY <
            (boundsRef.current?.clientHeight ?? 0) -
              (elementRef.current?.clientHeight ?? 0)
            ? newY
            : prevPosition.y,
      };
    });

    requestRef.current = requestAnimationFrame(updatePosition);
  }, [boundsRef]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updatePosition]);

  return (
    <div
      ref={elementRef}
      className={cn(
        !!className && className,
        "absolute transition-all ease-linear duration-1000"
      )}
      style={{
        transform: `translate(${position.x ?? 0}px, ${position.y ?? 0}px)`,
        opacity: getRandomIncrement(),
      }}
    >
      {children}
    </div>
  );
};
