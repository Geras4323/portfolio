"use client";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import BGDark from "../../public/BackieDark.jpg";
import BGLight from "../../public/BackieLight.jpg";
import { RandomTranslation } from "@/components/randomTranslation";
import { cn } from "@/utils/lib";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-screen bg-base-100 h-screen items-center justify-between p-8">
      <section className="rounded-5xl size-full relative bg-secondary/10 grid grid-cols-1 grid-rows-3 overflow-hidden p-16">
        <div className="z-20 absolute size-full backdrop-blur-[2px] rounded-5xl" />

        <div ref={containerRef} className="w-full h-72 z-10 absolute bottom-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <RandomTranslation
              key={i}
              className={cn(
                theme === "dark" ? "bg-yellow-300" : "bg-white",
                "rounded-full size-1 opacity-90"
              )}
              boundsRef={containerRef}
            />
          ))}
        </div>

        <Image
          alt=""
          src={theme === "dark" ? BGDark : BGLight}
          width={2000}
          height={2000}
          className="size-full object-cover absolute blur-[2px]"
        />

        <button
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
          className="btn z-20"
        >
          change
        </button>
      </section>
    </div>
  );
}

{
  /* Manual borders
<section className="size-full bg-secondary relative">
  <div className="absolute top-0 w-full h-8 bg-primary" />
  <div className="absolute h-full right-0 w-8 bg-primary" />
  <div className="absolute h-8 bottom-0 w-full bg-primary" />
  <div className="absolute h-full left-0 w-8 bg-primary" />

  <div className="top-8 left-8 absolute size-8 min-w-8 bg-primary" />
  <div className="absolute size-16 left-8 top-8 rounded-full bg-secondary" />
</section> */
}
