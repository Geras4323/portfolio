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
  translation,
}: WithClassName &
  WithChildren & {
    boundsRef: RefObject<HTMLDivElement>;
    translation: { top: number; left: number };
  }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);

  const defaultStepSize = 5;
  const [isGettingAway, setIsGettingAway] = useState(false);

  const getRandomIncrement = useCallback(() => {
    return (
      (Math.random() < 0.5 ? -1 : 1) *
      (isGettingAway ? defaultStepSize * 5 : defaultStepSize)
    );
  }, [isGettingAway]);

  // const getBoundedPosition = useCallback(
  //   (newPos: Point2D, defaultPos: Point2D): Point2D => {
  //     return {
  //       x:
  //         newPos.x > 0 &&
  //         newPos.x <
  //           (boundsRef.current?.clientWidth ?? 0) -
  //             (elementRef.current?.clientWidth ?? 0) -
  //             translation.top
  //           ? newPos.x
  //           : defaultPos.x,
  //       y:
  //         newPos.y > 0 &&
  //         newPos.y <
  //           (boundsRef.current?.clientHeight ?? 0) -
  //             (elementRef.current?.clientHeight ?? 0) -
  //             translation.left
  //           ? newPos.y
  //           : defaultPos.y,
  //     };
  //   },
  //   [boundsRef, translation]
  // );

  const updatePosition = useCallback(() => {
    if (!boundsRef.current || !elementRef.current) return;

    setPosition((prevPosition) => {
      const newX = prevPosition.x + getRandomIncrement();
      const newY = prevPosition.y + getRandomIncrement();

      // return getBoundedPosition({ x: newX, y: newY }, prevPosition);
      return { x: newX, y: newY };
    });

    requestRef.current = requestAnimationFrame(updatePosition);
  }, [boundsRef, getRandomIncrement]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updatePosition]);

  function getAway() {
    // function getAway(e: globalThis.MouseEvent) {
    // if (
    //   distance({
    //     a: { x: e.clientX, y: e.clientY },
    //     b: {
    //       x: elementRef.current?.getBoundingClientRect().left ?? 0,
    //       y: elementRef.current?.getBoundingClientRect().top ?? 0,
    //     },
    //   }) < 50
    // ) {
    //   setIsGettingAway(true);
    //   setTimeout(() => {
    //     setIsGettingAway(false);
    //   }, 500);
    // }
    setIsGettingAway(true);
    setTimeout(() => {
      setIsGettingAway(false);
    }, 500);
  }

  useEffect(() => {
    document.addEventListener("mousedown", getAway);

    return () => document.removeEventListener("mousedown", getAway);
  });

  return (
    <div
      ref={elementRef}
      className={cn(
        !!className && className,
        "absolute transition-all duration-1000 ease-linear",
      )}
      style={{
        transform: `translate(${position.x ?? 0}px, ${position.y ?? 0}px)`,
        translate: `${translation.left}px ${translation.top}px`,
        // opacity: getRandomIncrement(),
      }}
    >
      {children}
    </div>
  );
};
