"use client";
import { cn } from "@/utils/lib";
import { Moon, Sun } from "lucide-react";
import { Remarked } from "@/components/remarkedBlock";
import { GitHubSVG } from "../../public/github/logo";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { useEffect, useState } from "react";
import LushForest from "../../public/lush-forest.jpg";
import Image from "next/image";
import { SpinningCircle } from "@/components/spinningCircle";
import SiggaGradient from "../../public/sigga/Gradient.png";
import { PlatziLogo } from "public/platzi/logo";
import { LinkedinLogo } from "public/linkedin/logo";
import SCTrackng from "../../public/seatcontrol/tracking.gif";
import { DPSLogo } from "public/dps/logo";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const { theme, switchTheme } = useThemeSwitcher();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex h-fit min-h-screen w-full gap-8 overflow-clip p-16">
      {/* CONTENT */}
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full gap-8">
          <section className="flex w-1/2 flex-col justify-between gap-8">
            <Remarked className="h-80 min-h-80 w-full">
              <div className="flex h-full w-full flex-col gap-4 rounded-2xl bg-secondary/10 p-8 shadow-inner-lg">
                <p className="text-5xl font-semibold uppercase tracking-wide">
                  Germán Göhringer
                </p>
                <div className="glitch text-3xl uppercase tracking-wide">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <span key={i} className="line">
                      <TypeAnimation
                        sequence={[
                          "Born to solve",
                          1500,
                          "Born to improve",
                          1500,
                          "Born to achieve",
                          1500,
                          "Born to be better",
                          4000,
                        ]}
                        className="inline-block text-lg uppercase tracking-wide lg:text-3xl"
                        wrapper="span"
                        repeat={Infinity}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </Remarked>

            <Remarked className="h-80 min-h-80 w-full">
              <div className="h-full w-full rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
                <div className="text-3xl uppercase tracking-wide text-primary" />
              </div>
            </Remarked>
          </section>

          <Remarked className="h-full w-1/2">
            <div className="size-full rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="size-full rounded-xl border border-secondary/20" />
            </div>
          </Remarked>
        </div>

        <section className="flex h-80">
          <Remarked className="h-full w-full">
            <div className="relative flex h-full w-full gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group flex h-full w-3/5 gap-1.5">
                {Array.from({ length: 1 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-full flex-[1] overflow-hidden rounded-xl transition-all duration-500 hover:flex-[1.5]"
                  >
                    <div className="absolute left-0 top-0 size-full bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                    <Image
                      alt="LushForest"
                      src={LushForest}
                      className="h-full w-full object-cover transition-all"
                    />
                  </div>
                ))}
                <div className="relative h-full flex-[1] overflow-hidden rounded-xl transition-all duration-500 hover:flex-[1.5]">
                  <div className="absolute left-0 top-0 size-full bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                  <Image
                    alt="SCT"
                    src={SCTrackng}
                    className="h-full w-full object-cover transition-all"
                  />
                </div>
              </div>
              <div className="flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <DPSLogo className="size-14 fill-primary/70" />
                <div className="flex flex-col justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-secondary">
                    Full App Development
                  </p>
                  <div className="glitch text-6xl text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Seat<b>Control</b>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <SpinningCircle className="right-12 top-1/2 scale-125" />
            </div>
          </Remarked>
        </section>

        <section className="flex h-80">
          <Remarked className="h-full w-full">
            <div className="flex h-full w-full gap-8 rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group flex h-full w-3/5 gap-1.5">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="relative h-full flex-[1] overflow-hidden rounded-xl transition-all duration-500 hover:flex-[1.5]"
                  >
                    <div className="absolute left-0 top-0 size-full bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                    <Image
                      alt="LushForest"
                      src={SiggaGradient}
                      className="h-full w-full object-cover transition-all"
                    />
                  </div>
                ))}
                {/* <div className="relative h-full flex-[1] overflow-hidden transition-all duration-500 hover:flex-[1.5]">
                  <div className="absolute left-0 top-0 size-full bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                  <Image
                    alt="LushForest"
                    src={SiggaGradient}
                    className="h-full w-full object-cover transition-all"
                  />
                </div> */}
              </div>
              <div className="flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <DPSLogo className="size-14 fill-primary/70" />
                <div className="flex flex-col justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-secondary">
                    Landing Page
                  </p>
                  <div className="glitch text-6xl font-semibold text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        SIGGA
                      </span>
                    ))}
                  </div>
                </div>
                {/* <SiggaLogo className="h-24" /> */}
              </div>
            </div>
          </Remarked>
        </section>
      </div>

      {/* ASIDE */}
      <div className="h-auto w-80 min-w-80 gap-8">
        <div className="sticky top-16 flex h-[calc(100vh-128px)] w-full flex-col gap-8">
          <Remarked className="size-full">
            <div
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              onClick={switchTheme}
              className={cn(
                loaded ? "opacity-100" : "opacity-0",
                "relative flex size-full h-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-secondary/10 shadow-inner-lg transition-all",
              )}
            >
              <div
                className={cn(
                  theme === "dark" && "rotate-180",
                  "absolute left-1/2 top-full flex h-full w-10 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-1000",
                )}
              >
                <Sun
                  className={cn(
                    theme === "light" && "rotate-180",
                    "absolute -top-5 size-10 transition-transform duration-1000",
                  )}
                />
                <Moon
                  className={cn(
                    theme === "dark" && "-rotate-180",
                    "absolute -bottom-5 size-10 transition-transform duration-1000",
                  )}
                />
              </div>
            </div>
          </Remarked>

          <Remarked className="size-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://github.com/Geras4323"
              target="_blank"
              className={cn(
                loaded ? "opacity-100" : "opacity-0",
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-150",
              )}
            >
              <GitHubSVG className="size-10 fill-primary/70 transition-all group-hover:scale-110" />
            </a>
          </Remarked>

          <Remarked className="size-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://platzi.com/p/german432/"
              target="_blank"
              className={cn(
                loaded ? "opacity-100" : "opacity-0",
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-300",
              )}
            >
              <PlatziLogo className="size-10 fill-primary/70 transition-all group-hover:scale-110" />
            </a>
          </Remarked>

          <Remarked className="size-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://www.linkedin.com/in/german-gohringer/"
              target="_blank"
              className={cn(
                loaded ? "opacity-100" : "opacity-0",
                "delay-450 group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all",
              )}
            >
              <LinkedinLogo className="size-9 fill-primary/70 transition-all group-hover:scale-110" />
            </a>
          </Remarked>
        </div>
      </div>
    </div>
  );
}
