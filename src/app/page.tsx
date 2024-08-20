"use client";
import { cn } from "@/utils/lib";
import {
  ArrowDown,
  FolderOpen,
  Minus,
  Moon,
  SquareArrowOutUpRight,
  Sun,
  UserRound,
  Wrench,
} from "lucide-react";
import { Remarked } from "@/components/remarkedBlock";
import { GitHubSVG } from "../../public/github/logo";
import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { PlatziLogo } from "public/platzi/logo";
import { LinkedinLogo } from "public/linkedin/logo";
import { DPSColorLogo } from "public/dps/color_logo";
import { TypeAnimation } from "react-type-animation";
import { CareerDiagram } from "@/components/diagram/carreerDiagram";
//
import ShowroomDark from "../../public/misideaspintadas/showroomDark.png";
import ShowroomLight from "../../public/misideaspintadas/showroomLight.png";
import OrdersDark from "../../public/misideaspintadas/ordersDark.png";
import OrdersLight from "../../public/misideaspintadas/ordersLight.png";
//
import SCTrackng from "../../public/seatcontrol/tracking.gif";
import SCTrackingDark from "../../public/seatcontrol/trackingDark.png";
import SCTrackingLight from "../../public/seatcontrol/trackingLight.png";
import SCSupportDark from "../../public/seatcontrol/supportDark.png";
import SCSupportLight from "../../public/seatcontrol/supportLight.png";
import SCAuditDark from "../../public/seatcontrol/auditDark.png";
import SCAuditLight from "../../public/seatcontrol/auditLight.png";
//
import SiggaTop from "../../public/sigga/top.png";
import SiggaFooter from "../../public/sigga/footer.png";
//
import DPSBrands from "../../public/dps/brands.png";
import DPSProducts from "../../public/dps/products.png";
//
import { CV } from "public/special/cv";
import { React } from "public/techs/react";
import { Typescript } from "public/techs/typescript";
import { NextJS } from "public/techs/nextjs";
import { TailwindCSS } from "public/techs/tailwind";
import { Go } from "public/techs/go";
import { MySQL } from "public/techs/mysql";
import { Maps } from "public/techs/maps";
import { Websocket } from "public/techs/websocket";
import { Chart } from "public/techs/chart";
import { Diagram } from "public/techs/diagram";
import { AWSEC2 } from "public/techs/awsec2";
import { Docker } from "public/techs/docker";
import { NodeJS } from "public/techs/nodejs";
import { TechItem } from "@/components/techItem";
import { mqs, useMediaQueries } from "@/hooks/screen";

const misideaspintadasImages: {
  dark: StaticImageData[];
  light: StaticImageData[];
} = {
  dark: [ShowroomDark, OrdersDark],
  light: [ShowroomLight, OrdersLight],
};

const siggaImages: StaticImageData[] = [SiggaTop, SiggaFooter];
const dpsImages: StaticImageData[] = [DPSBrands, DPSProducts];

export default function Home() {
  const { theme, switchTheme } = useThemeSwitcher();
  const mq = useMediaQueries();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animations] = useState(true);

  const seatcontrolImages: {
    dark: StaticImageData[];
    light: StaticImageData[];
  } = {
    dark: [
      SCTrackingDark,
      mq >= mqs.sm ? SCSupportDark : null,
      SCAuditDark,
    ].filter((image) => image !== null),
    light: [
      SCTrackingLight,
      mq >= mqs.sm ? SCSupportLight : null,
      SCAuditLight,
    ].filter((image) => image !== null),
  };

  useEffect(() => {
    setIsLoading(false);
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const mip =
    theme === "dark"
      ? misideaspintadasImages.dark
      : misideaspintadasImages.light;

  const sc =
    theme === "dark" ? seatcontrolImages.dark : seatcontrolImages.light;

  if (isLoading) return;

  return (
    <div
      className={cn(
        theme === "dark"
          ? "bg-gradient-to-br from-[#9619c840] via-black to-[#033bc840]"
          : "bg-gradient-to-bl from-[#e2dccfff] to-white",
        "flex h-fit min-h-screen w-full gap-6 overflow-clip bg-fixed p-6 backdrop-blur-sm 2xl:gap-8 2xl:p-16",
      )}
    >
      {/* <button
        onClick={() => setAnimations((prev) => !prev)}
        className="fixed right-0 top-0 size-8"
      /> */}

      {/* CONTENT */}
      <div className="flex w-full flex-col gap-6 2xl:gap-8">
        <div className="flex w-full gap-6 2xl:gap-8">
          <section className="flex w-full flex-col justify-between gap-6 xl:w-1/2 2xl:gap-8">
            {/* NAME */}
            <Remarked className="h-fit min-h-48 w-full md:min-h-52 lg:min-h-60 2xl:h-80 2xl:min-h-80">
              <div className="flex h-full w-full flex-col justify-between gap-6 rounded-2xl bg-secondary/10 p-4 shadow-inner-lg xl:p-8 2xl:gap-4">
                <div className="flex flex-col gap-4 text-primary/70">
                  <p className="text-4xl font-semibold uppercase tracking-wide md:text-5xl">
                    Germán Göhringer
                  </p>
                  <p className="text-2xl uppercase tracking-wide md:text-3xl">
                    Frontend Developer
                  </p>
                </div>
                {animations && true && (
                  <div className="glitch uppercase tracking-wide">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        <TypeAnimation
                          sequence={[
                            "Born to solve",
                            2000,
                            "Born to improve",
                            3000,
                            "Born to achieve",
                            3000,
                            "Born to be better",
                            4000,
                          ]}
                          className="inline-block text-2xl uppercase tracking-wide lg:text-4xl"
                          wrapper="span"
                          repeat={Infinity}
                          cursor={false}
                        />
                      </span>
                    ))}
                  </div>
                )}

                {/* CV AND LIGHT/DARK - MOBILE */}
                <div className="grid h-24 min-h-24 w-full grid-cols-3 gap-4 sm:hidden">
                  <a
                    href="./CV - GERMAN GOHRINGER - FRONTEND DEVELOPER.pdf"
                    download
                    className="relative col-span-2 flex size-full cursor-pointer items-center justify-center rounded-lg bg-secondary/10 shadow-md transition-all duration-300 hover:bg-secondary/15 2xl:hidden"
                  >
                    <div className="relative">
                      <CV className="size-16 min-w-16 fill-primary/70 2xl:size-20 2xl:min-w-20" />
                      <ArrowDown className="absolute -bottom-1 right-0 size-5 min-w-5 animate-bounce" />
                      <Minus className="absolute right-0 -my-2 size-5 min-w-5" />
                    </div>
                  </a>

                  <div
                    onClick={switchTheme}
                    className={cn(
                      "group relative col-span-1 flex size-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-secondary/10 shadow-md transition-all 2xl:h-full",
                    )}
                  >
                    <div
                      className={cn(
                        theme === "dark" && "rotate-180",
                        "absolute left-1/2 top-full flex h-full w-8 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-700 2xl:w-10",
                      )}
                    >
                      <Sun
                        className={cn(
                          theme === "light" && "rotate-180",
                          "absolute -top-5 size-8 transition-transform duration-700 2xl:size-10",
                        )}
                      />
                      <Moon
                        className={cn(
                          theme === "dark" && "-rotate-180",
                          "absolute -bottom-5 size-8 transition-transform duration-700 2xl:size-10",
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Remarked>

            {/* LINKS MOBILE */}
            <Remarked className="h-fit min-h-16 w-full lg:hidden">
              <div className="grid size-full grid-cols-3 gap-4 bg-secondary/5 px-4 py-2 sm:grid-cols-2 sm:py-4">
                <a
                  href="https://github.com/Geras4323"
                  target="_blank"
                  className={cn(
                    isLoaded ? "opacity-100" : "opacity-0",
                    "group flex h-20 w-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-150 2xl:h-full",
                  )}
                >
                  <GitHubSVG className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
                  <div
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                    )}
                  />
                </a>

                <div
                  onClick={switchTheme}
                  className={cn(
                    "group relative col-span-1 hidden h-20 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-secondary/10 shadow-inner-lg transition-all sm:flex 2xl:h-full",
                  )}
                >
                  <div
                    className={cn(
                      theme === "dark" && "rotate-180",
                      "absolute left-1/2 top-full flex h-full w-8 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-700 2xl:w-10",
                    )}
                  >
                    <Sun
                      className={cn(
                        theme === "light" && "rotate-180",
                        "absolute -top-5 size-8 transition-transform duration-700 2xl:size-10",
                      )}
                    />
                    <Moon
                      className={cn(
                        theme === "dark" && "-rotate-180",
                        "absolute -bottom-5 size-8 transition-transform duration-700 2xl:size-10",
                      )}
                    />
                  </div>
                  <div
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                    )}
                  />
                </div>

                <a
                  href="https://www.linkedin.com/in/german-gohringer/"
                  target="_blank"
                  className={cn(
                    isLoaded ? "opacity-100" : "opacity-0",
                    "group flex h-20 w-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-300 2xl:h-full",
                  )}
                >
                  <LinkedinLogo className="size-7 fill-primary/70 transition-all group-hover:scale-110 2xl:size-9" />
                  <div
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-900 group-hover:from-white/60 group-hover:via-transparent",
                    )}
                  />
                </a>

                <a
                  href="https://platzi.com/p/german432/"
                  target="_blank"
                  className={cn(
                    isLoaded ? "opacity-100" : "opacity-0",
                    "group flex h-20 w-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-450 2xl:h-full",
                  )}
                >
                  <PlatziLogo className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
                  <div
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      // "delay-1050 absolute z-0 size-10 rounded-full bg-white/50 blur-md transition-all",
                      "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-1050 group-hover:from-white/60 group-hover:via-transparent",
                    )}
                  />
                </a>
              </div>
            </Remarked>

            {/* CV & TOOLS */}
            <Remarked className="h-72 w-full 2xl:h-80 2xl:min-h-80">
              <div className="flex h-full w-full gap-4 rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
                <div className="flex h-full w-full gap-6 rounded-xl border border-secondary/20 p-4 lg:w-3/5 xl:w-full">
                  {/* CV */}
                  <a
                    href="./CV - GERMAN GOHRINGER - FRONTEND DEVELOPER.pdf"
                    download
                    className="relative hidden h-full w-44 min-w-44 cursor-pointer items-center justify-center rounded-lg bg-secondary/10 shadow-md transition-all duration-300 hover:bg-secondary/15 sm:flex"
                  >
                    <div className="relative">
                      <CV className="size-20 min-w-20 fill-primary/70 2xl:size-20 2xl:min-w-20" />
                      <ArrowDown className="absolute -bottom-1 right-0 size-6 min-w-6 animate-bounce" />
                      <Minus className="absolute right-0 -my-2 size-6 min-w-6" />
                    </div>
                  </a>
                  {/* Tools */}
                  <div className="flex size-full flex-col gap-2">
                    <div className="flex h-8 items-center justify-center gap-2 self-center rounded-full bg-secondary/15 pl-3 pr-4 shadow-md">
                      <Wrench className="size-5 min-w-5 stroke-1" />
                      <span className="text-lg uppercase">Tools</span>
                    </div>

                    <div className="flex size-full flex-col justify-around 2xl:justify-evenly">
                      <div className="flex items-center justify-center gap-6 sm:gap-8 xl:gap-5 2xl:gap-6">
                        <TechItem Svg={React} content="ReactJS" />
                        <TechItem
                          Svg={NextJS}
                          content="NEXT.js"
                          className="fill-primary"
                        />
                        <TechItem Svg={Typescript} content="TypeScript" />
                        <TechItem Svg={TailwindCSS} content="Tailwind CSS" />
                      </div>
                      <div className="flex items-center justify-center gap-6 sm:gap-8 xl:gap-5 2xl:gap-6">
                        <TechItem Svg={Go} content="Golang" />
                        <TechItem Svg={Docker} content="Docker" />
                        <TechItem Svg={MySQL} content="MySQL" />
                        <TechItem
                          Svg={AWSEC2}
                          content="AWS EC2"
                          className="fill-primary/60"
                        />
                        <TechItem Svg={NodeJS} content="NodeJS" />
                      </div>
                      <div className="flex items-center justify-center gap-6 sm:gap-8 xl:gap-5 2xl:gap-6">
                        <TechItem
                          Svg={Websocket}
                          content="Websockets"
                          className="fill-primary/60"
                        />
                        <TechItem
                          Svg={Chart}
                          content="Charts"
                          className="fill-primary/60"
                        />
                        <TechItem
                          Svg={Maps}
                          content="Maps"
                          className="stroke-primary/60"
                        />
                        <TechItem
                          Svg={Diagram}
                          content="Diagrams"
                          className="stroke-primary/60"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* LINKS TABLET */}
                <div className="hidden h-full w-2/5 grid-cols-2 gap-4 lg:grid xl:hidden">
                  <a
                    href="https://github.com/Geras4323"
                    target="_blank"
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "group flex size-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-150 2xl:h-full",
                    )}
                  >
                    <GitHubSVG className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
                    <div
                      className={cn(
                        isLoaded ? "opacity-100" : "opacity-0",
                        "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                      )}
                    />
                  </a>

                  <div
                    onClick={switchTheme}
                    className={cn(
                      "group relative col-span-1 flex size-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-secondary/10 shadow-inner-lg transition-all 2xl:h-full",
                    )}
                  >
                    <div
                      className={cn(
                        theme === "dark" && "rotate-180",
                        "absolute left-1/2 top-full flex h-full w-8 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-700 2xl:w-10",
                      )}
                    >
                      <Sun
                        className={cn(
                          theme === "light" && "rotate-180",
                          "absolute -top-5 size-8 transition-transform duration-700 2xl:size-10",
                        )}
                      />
                      <Moon
                        className={cn(
                          theme === "dark" && "-rotate-180",
                          "absolute -bottom-5 size-8 transition-transform duration-700 2xl:size-10",
                        )}
                      />
                    </div>
                    <div
                      className={cn(
                        isLoaded ? "opacity-100" : "opacity-0",
                        "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                      )}
                    />
                  </div>

                  <a
                    href="https://www.linkedin.com/in/german-gohringer/"
                    target="_blank"
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "group flex size-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-300 2xl:h-full",
                    )}
                  >
                    <LinkedinLogo className="size-7 fill-primary/70 transition-all group-hover:scale-110 2xl:size-9" />
                    <div
                      className={cn(
                        isLoaded ? "opacity-100" : "opacity-0",
                        "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-900 group-hover:from-white/60 group-hover:via-transparent",
                      )}
                    />
                  </a>

                  <a
                    href="https://platzi.com/p/german432/"
                    target="_blank"
                    className={cn(
                      isLoaded ? "opacity-100" : "opacity-0",
                      "group flex size-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-450 2xl:h-full",
                    )}
                  >
                    <PlatziLogo className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
                    <div
                      className={cn(
                        isLoaded ? "opacity-100" : "opacity-0",
                        // "delay-1050 absolute z-0 size-10 rounded-full bg-white/50 blur-md transition-all",
                        "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-1050 group-hover:from-white/60 group-hover:via-transparent",
                      )}
                    />
                  </a>
                </div>
              </div>
            </Remarked>
          </section>

          {/* DIAGRAM */}
          <Remarked className="hidden h-full w-1/2 xl:block">
            <div className="size-full rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="size-full rounded-xl border border-secondary/20">
                <CareerDiagram />
              </div>
            </div>
          </Remarked>
        </div>

        {/* MIS IDEAS PINTADAS */}
        <Remarked className="h-fit w-full 2xl:h-80">
          <div className="relative flex h-fit w-full flex-col gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg xl:h-full xl:flex-row 2xl:flex-row">
            <div className="z-20 flex h-full w-full flex-col justify-between gap-2 2xl:w-2/5">
              <div className="flex items-center justify-between gap-3 pl-2 xl:justify-start">
                <div className="flex h-8 items-center justify-center gap-2 self-center rounded-full bg-secondary/15 pl-3 pr-4 shadow-md backdrop-blur-sm">
                  <FolderOpen className="size-5 min-w-5" />
                  <span className="text-lg uppercase">Project</span>
                </div>
                <div className="flex items-center gap-3 2xl:pr-0">
                  <UserRound className="size-9 min-w-9 text-primary/70" />
                  <a
                    href="https://misideaspintadas.com.ar/"
                    className="mr-2 flex items-center"
                  >
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2 xl:p-4">
                <p className="hidden text-nowrap text-2xl italic text-primary/70 xl:block">
                  Ecommerce - Full App Development
                </p>
                <p className="flex flex-col text-xl italic text-primary/70 xl:hidden 2xl:text-nowrap 2xl:text-2xl">
                  <span>Ecommerce</span>
                  Full App Development
                </p>
                <div className="text-4xl font-semibold text-primary xl:text-nowrap xl:text-5xl">
                  Mis Ideas Pintadas
                </div>
              </div>
            </div>
            <div className="group z-10 flex h-72 w-full gap-1.5 2xl:h-full 2xl:w-3/5">
              {mip.map((image, i) => (
                <div
                  key={i}
                  className="relative h-full flex-[1] overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:flex-[1.5]"
                >
                  <div className="absolute left-0 top-0 size-full rounded-xl bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                  <Image
                    alt="LushForest"
                    src={image}
                    className="h-full w-full object-cover opacity-85 saturate-0 transition-all duration-500 hover:opacity-100 hover:saturate-100"
                    width={400}
                    height={300}
                  />
                </div>
              ))}
            </div>

            {animations && (
              <>
                <video
                  id="carousel"
                  src={"./misideaspintadas/carouselLight.mp4"}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className={cn(
                    theme === "dark" ? "opacity-0" : "opacity-30",
                    "grad1 absolute left-0 top-0 z-0 h-full w-96 object-cover",
                  )}
                />
                <video
                  id="carousel"
                  src={"./misideaspintadas/carouselDark.mp4"}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className={cn(
                    theme === "dark" ? "opacity-20" : "opacity-0",
                    "grad1 absolute left-0 top-0 z-0 h-full w-96 object-cover",
                  )}
                />
              </>
            )}
          </div>
        </Remarked>

        {/* SEAT CONTROL */}
        <Remarked className="h-fit w-full 2xl:h-80">
          <div className="relative flex h-fit w-full flex-col gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg xl:h-full xl:flex-row 2xl:flex-row">
            <div className="z-20 flex h-full w-full flex-col justify-between gap-2 xl:w-2/5">
              <div className="flex items-center justify-between gap-3 pl-2 xl:justify-start">
                <div className="flex h-8 items-center justify-center gap-2 self-center rounded-full bg-secondary/15 pl-3 pr-4 shadow-md backdrop-blur-sm">
                  <FolderOpen className="size-5 min-w-5" />
                  <span className="text-lg uppercase">Project</span>
                </div>
                <div className="flex items-center gap-2 pr-1 2xl:gap-3 2xl:pr-0">
                  <DPSColorLogo className="size-14 fill-primary/70 drop-shadow-lg" />
                  <a
                    href="https://www.stctrl.com.ar/"
                    className="flex items-center"
                  >
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-2 xl:p-4">
                <p className="text-nowrap text-xl italic text-primary/70 xl:text-2xl">
                  Full Frontend Development
                </p>
                <div className="text-5xl text-primary xl:text-6xl">
                  Seat<b>Control</b>
                </div>
              </div>
            </div>
            <div className="group z-10 flex h-72 w-full gap-1.5 xl:w-3/5 2xl:h-full">
              {sc.map((image, i) => (
                <div
                  key={i}
                  className="relative h-full flex-[1] overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:flex-[1.5]"
                >
                  <div className="absolute left-0 top-0 size-full rounded-xl bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                  <Image
                    alt="SC_Image"
                    src={image}
                    className="h-full w-full object-cover opacity-85 saturate-0 transition-all duration-500 hover:opacity-100 hover:saturate-100"
                    height={400}
                    width={300}
                  />
                </div>
              ))}
            </div>

            {animations && (
              <Image
                alt="SCTrackng"
                src={SCTrackng}
                className="grad1 absolute left-0 top-0 z-0 h-full object-cover opacity-30"
              />
            )}
          </div>
        </Remarked>

        <section className="flex h-fit flex-col gap-6 lg:h-80 lg:flex-row 2xl:h-80 2xl:flex-row 2xl:gap-8">
          {/* DPS */}
          <Remarked className="h-fit w-full sm:h-full 2xl:h-full">
            <div className="relative flex h-fit w-full flex-col gap-6 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg sm:h-full sm:flex-row 2xl:h-full 2xl:flex-row 2xl:gap-8">
              <div className="z-10 flex h-fit w-full flex-col justify-between gap-2 sm:h-full sm:w-1/3 2xl:h-full 2xl:w-2/5">
                <div className="flex flex-row items-center justify-between gap-1 pl-2 sm:flex-col sm:items-start 2xl:flex-col 2xl:items-start 2xl:justify-center">
                  <div className="flex h-8 items-center justify-center gap-2 rounded-full bg-secondary/15 pl-3 pr-4 shadow-md backdrop-blur-sm 2xl:self-start">
                    <FolderOpen className="size-5 min-w-5" />
                    <span className="text-lg uppercase">Project</span>
                  </div>
                  <div className="flex items-center gap-3 pr-1 2xl:pr-0">
                    <DPSColorLogo className="size-14 fill-primary/70 drop-shadow-lg" />
                    <a
                      href="https://www.dpssoftware.com.ar/"
                      className="flex items-center"
                    >
                      <SquareArrowOutUpRight className="size-6 min-w-6" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:p-2 2xl:p-4">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Landing Page
                  </p>
                  <div className="text-6xl font-semibold text-primary">DPS</div>
                </div>
              </div>
              <div className="group flex h-72 w-full gap-1.5 sm:w-2/3 2xl:h-full 2xl:w-3/5">
                {dpsImages.map((image, i) => (
                  <div
                    key={i}
                    className="relative h-full flex-[1] overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:flex-[1.5]"
                  >
                    <div className="absolute left-0 top-0 size-full rounded-xl bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                    <Image
                      alt="DPS_Image"
                      src={image}
                      className="h-full w-full object-cover opacity-85 saturate-0 transition-all duration-500 hover:opacity-100 hover:saturate-100"
                      width={200}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Remarked>

          {/* SIGGA */}
          <Remarked className="h-fit w-full sm:h-full 2xl:h-full">
            <div className="relative flex h-fit w-full flex-col gap-6 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg sm:h-full sm:flex-row 2xl:h-full 2xl:flex-row 2xl:gap-8">
              <div className="z-10 flex h-fit w-full flex-col justify-between gap-2 sm:h-full sm:w-1/3 2xl:h-full 2xl:w-2/5">
                <div className="flex flex-row items-center justify-between gap-1 pl-2 sm:flex-col sm:items-start 2xl:flex-col 2xl:items-start 2xl:justify-center">
                  <div className="flex h-8 items-center justify-center gap-2 rounded-full bg-secondary/15 pl-3 pr-4 shadow-md 2xl:self-start">
                    <FolderOpen className="size-5 min-w-5" />
                    <span className="text-lg uppercase">Project</span>
                  </div>
                  <div className="flex items-center gap-3 pr-1 2xl:pr-0">
                    <DPSColorLogo className="size-14 fill-primary/70 drop-shadow-lg" />
                    <a
                      href="https://www.dpssoftware.com.ar/"
                      className="flex items-center"
                    >
                      <SquareArrowOutUpRight className="size-6 min-w-6" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:p-2 2xl:p-4">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Landing Page
                  </p>
                  <div className="text-6xl font-semibold text-primary">
                    SIGGA
                  </div>
                </div>
              </div>
              <div className="group flex h-72 w-full gap-1.5 sm:w-2/3 2xl:h-full 2xl:w-3/5">
                {siggaImages.map((image, i) => (
                  <div
                    key={i}
                    className="relative h-full flex-[1] overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:flex-[1.5]"
                  >
                    <div className="absolute left-0 top-0 size-full rounded-xl bg-black/50 opacity-0 transition-all duration-500 hover:!opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-[1px]" />
                    <Image
                      alt="Sigga_Image"
                      src={image}
                      className="h-full w-full object-cover opacity-85 saturate-0 transition-all duration-500 hover:opacity-100 hover:saturate-100"
                      width={200}
                      height={300}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Remarked>
        </section>
      </div>

      {/* ASIDE */}
      <div className="hidden h-auto gap-8 xl:block xl:w-36 xl:min-w-36 2xl:w-80 2xl:min-w-80">
        <div className="sticky top-6 flex w-full flex-col gap-6 xl:h-[calc(100vh-48px)] 2xl:top-16 2xl:h-[calc(100vh-128px)] 2xl:gap-8">
          <Remarked className="h-full w-full 2xl:h-full">
            <div
              onClick={switchTheme}
              className={cn(
                isLoaded ? "opacity-100" : "opacity-0",
                "group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-secondary/10 shadow-inner-lg transition-all 2xl:h-full",
              )}
            >
              <div
                className={cn(
                  theme === "dark" && "rotate-180",
                  "absolute left-1/2 top-full flex h-full w-8 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-700 2xl:w-10",
                )}
              >
                <Sun
                  className={cn(
                    theme === "light" && "rotate-180",
                    "absolute -top-5 size-8 transition-transform duration-700 2xl:size-10",
                  )}
                />
                <Moon
                  className={cn(
                    theme === "dark" && "-rotate-180",
                    "absolute -bottom-5 size-8 transition-transform duration-700 2xl:size-10",
                  )}
                />
              </div>
              <div
                className={cn(
                  isLoaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-600 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
            </div>
          </Remarked>

          <Remarked className="h-full w-full 2xl:h-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://github.com/Geras4323"
              target="_blank"
              className={cn(
                isLoaded ? "opacity-100" : "opacity-0",
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-150 2xl:h-full",
              )}
            >
              <GitHubSVG className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
              <div
                className={cn(
                  isLoaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
            </a>
          </Remarked>

          <Remarked className="h-full w-full 2xl:h-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://www.linkedin.com/in/german-gohringer/"
              target="_blank"
              className={cn(
                isLoaded ? "opacity-100" : "opacity-0",
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-300 2xl:h-full",
              )}
            >
              <LinkedinLogo className="size-7 fill-primary/70 transition-all group-hover:scale-110 2xl:size-9" />
              <div
                className={cn(
                  isLoaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-900 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
            </a>
          </Remarked>

          <Remarked className="h-full w-full 2xl:h-full">
            <a
              // onMouseOver={setHover}
              // onMouseLeave={clearState}
              href="https://platzi.com/p/german432/"
              target="_blank"
              className={cn(
                isLoaded ? "opacity-100" : "opacity-0",
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-450 2xl:h-full",
              )}
            >
              <PlatziLogo className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
              <div
                className={cn(
                  isLoaded ? "opacity-100" : "opacity-0",
                  // "delay-1050 absolute z-0 size-10 rounded-full bg-white/50 blur-md transition-all",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-1050 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
            </a>
          </Remarked>
        </div>
      </div>
    </div>
  );
}
