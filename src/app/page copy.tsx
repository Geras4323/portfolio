"use client";
import { cn } from "@/utils/lib";
import { Moon, Sun } from "lucide-react";
import { Remarked } from "@/components/remarkedBlock";
import { MouseTracker } from "@/components/mouseTracker";
import { GitHubSVG } from "../../public/SVGs/github_svg";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { useCursorState } from "@/hooks/useCursorState";
import { useRef } from "react";
import { Separator } from "@/components/separator";
import { RandomTranslation } from "@/components/randomTranslation";

export default function Home() {
  const boundsRef = useRef<HTMLDivElement>(null);

  const { theme, switchTheme } = useThemeSwitcher();
  const { cursorState, setHover, setVScroll, setHScroll, clearState } =
    useCursorState();

  return (
    <div
      className={cn(
        theme === "dark"
          ? "from-[#160633] to-black"
          : "from-violet-200 to-white",
        "bg-gradient-to-br w-full bg-fixed h-screen bg-base-100 items-center justify-between"
      )}
    >
      {/* <MouseTracker state={cursorState} /> */}

      <article
        ref={boundsRef}
        className="z-10 size-full relative flex flex-col overflow-hidden"
      >
        {/* Blur */}
        <div className="absolute top-0 left-0 backdrop-blur-sm z-10 size-full" />

        <div className="absolute size-full z-20">
          {/* Artificial top and bottom padding */}
          <Separator className="w-full absolute top-0 left-0 min-h-16 h-16" />
          <Separator className="w-full absolute bottom-0 left-0 min-h-16 h-16" />
          {/* Artificial left and right padding */}
          <Separator className="h-[calc(100%-128px)] absolute left-0 top-16 min-w-16 w-16" />
          <Separator className="h-[calc(100%-128px)] absolute right-0 top-16 min-w-16 w-16" />
        </div>

        <div className="size-full absolute top-0 left-0 flex flex-col z-20 p-16">
          <section className="h-full flex justify-between">
            <Remarked className="h-full w-full">
              <div className="w-full rounded-2xl flex flex-col gap-4 h-full p-8 shadow-inner-md bg-secondary/15">
                <p className="text-5xl font-semibold uppercase tracking-wide">
                  Germán Göhringer
                </p>
                <p className="text-3xl uppercase tracking-wide">
                  Frontend Developer
                </p>
              </div>
            </Remarked>

            {/* Separator */}
            <Separator className="w-8 min-w-8 h-full" />

            <div className="h-full flex flex-col w-80 min-w-80">
              <Remarked className="size-full">
                <div
                  onMouseOver={setHover}
                  onMouseLeave={clearState}
                  onClick={switchTheme}
                  className="flex rounded-2xl relative size-full shadow-inner-md overflow-hidden items-center justify-center bg-secondary/15"
                >
                  <div
                    className={cn(
                      theme === "dark" && "rotate-180",
                      "flex flex-col w-10 justify-between transition-transform duration-1000 h-full rounded-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full"
                    )}
                  >
                    <Sun
                      className={cn(
                        theme === "light" && "rotate-180",
                        "size-10 absolute -top-5 transition-transform duration-1000"
                      )}
                    />
                    <Moon
                      className={cn(
                        theme === "dark" && "-rotate-180",
                        "size-10 absolute -bottom-5 transition-transform duration-1000"
                      )}
                    />
                  </div>
                </div>
              </Remarked>

              {/* Separator */}
              <Separator className="h-8 min-h-8 w-full" />

              <Remarked className="size-full">
                <a
                  onMouseOver={setHover}
                  onMouseLeave={clearState}
                  href="https://github.com/Geras4323"
                  target="_blank"
                  className="w-full rounded-2xl cursor-none flex justify-center items-center shadow-inner-md h-full p-4 bg-secondary/15"
                >
                  <GitHubSVG className="size-10 fill-primary/70" />
                </a>
              </Remarked>
            </div>
          </section>

          {/* Separator */}
          <Separator className="h-8 min-h-8 w-full" />

          <section className="h-full flex">
            <div className="w-full flex">
              <Remarked className="h-full w-full">
                <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                  <div className="glitch text-3xl uppercase tracking-wide text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Maps
                      </span>
                    ))}
                  </div>
                </div>
              </Remarked>

              {/* Separator */}
              <Separator className="w-8 min-w-8 h-full" />

              <Remarked className="h-full w-full">
                <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                  <div className="glitch text-3xl uppercase tracking-wide text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Websockets
                      </span>
                    ))}
                  </div>
                </div>
              </Remarked>
            </div>

            {/* Separator */}
            <Separator className="w-8 min-w-8 h-full" />

            <Remarked className="h-full w-full">
              <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                hola
              </div>
            </Remarked>
          </section>

          <section className="h-full flex">
            <div className="w-full flex">
              <Remarked className="h-full w-full">
                <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                  <div className="glitch text-3xl uppercase tracking-wide text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Maps
                      </span>
                    ))}
                  </div>
                </div>
              </Remarked>

              {/* Separator */}
              <Separator className="w-8 min-w-8 h-full" />

              <Remarked className="h-full w-full">
                <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                  <div className="glitch text-3xl uppercase tracking-wide text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Websockets
                      </span>
                    ))}
                  </div>
                </div>
              </Remarked>
            </div>

            {/* Separator */}
            <Separator className="w-8 min-w-8 h-full" />

            <Remarked className="h-full w-full">
              <div className="w-full rounded-2xl shadow-inner-md h-full p-4 bg-secondary/15">
                hola
              </div>
            </Remarked>
          </section>
        </div>

        {/* <RandomTranslation
          boundsRef={boundsRef}
          className="size-256 bg-gradient-radial z-0 from-[#150f2b80] rounded-full via-transparent to-transparent"
          translation={{ top: 0, left: 0 }}
        /> */}
        {/* <RandomTranslation
          boundsRef={boundsRef}
          className="size-256 bg-gradient-radial z-0 from-[#13285280] rounded-full via-transparent to-transparent"
          translation={{ top: 60, left: 600 }}
        /> */}
      </article>
    </div>
  );
}
