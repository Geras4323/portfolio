"use client";
import { cn } from "@/utils/lib";
import {
  ArrowDown,
  Moon,
  SquareArrowOutUpRight,
  Sun,
  UserRound,
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

const misideaspintadasImages: {
  dark: StaticImageData[];
  light: StaticImageData[];
} = {
  dark: [ShowroomDark, OrdersDark],
  light: [ShowroomLight, OrdersLight],
};

const seatcontrolImages: { dark: StaticImageData[]; light: StaticImageData[] } =
  {
    dark: [SCTrackingDark, SCSupportDark, SCAuditDark],
    light: [SCTrackingLight, SCSupportLight, SCAuditLight],
  };

const siggaImages: StaticImageData[] = [SiggaTop, SiggaFooter];
const dpsImages: StaticImageData[] = [DPSBrands, DPSProducts];

export default function Home() {
  const { theme, switchTheme } = useThemeSwitcher();

  const [loaded, setLoaded] = useState(false);
  const [animations, setAnimations] = useState(true);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const mip =
    theme === "dark"
      ? misideaspintadasImages.dark
      : misideaspintadasImages.light;

  const sc =
    theme === "dark" ? seatcontrolImages.dark : seatcontrolImages.light;

  return (
    <div
      className={cn(
        theme === "dark"
          ? "bg-gradient-to-br from-[#9619c840] via-black to-[#033bc840]"
          : "bg-gradient-to-bl from-[#e2dccfdd] via-white to-white",
        "flex h-fit min-h-screen w-full gap-8 overflow-clip bg-fixed p-16 backdrop-blur-sm",
      )}
      // className="flex h-fit min-h-screen w-full gap-8 overflow-clip p-16"
    >
      <button
        onClick={() => setAnimations((prev) => !prev)}
        className="fixed right-0 top-0 size-8"
      />

      {/* CONTENT */}
      <div className="flex w-full flex-col gap-8">
        <div className="flex w-full gap-8">
          <section className="flex w-1/2 flex-col justify-between gap-8">
            <Remarked className="h-80 min-h-80 w-full">
              <div className="flex h-full w-full flex-col justify-between gap-4 rounded-2xl bg-secondary/10 p-8 shadow-inner-lg">
                <div className="flex flex-col gap-4 text-primary/70">
                  <p className="text-5xl font-semibold uppercase tracking-wide">
                    Germán Göhringer
                  </p>
                  <p className="text-3xl uppercase tracking-wide">
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
                          className="inline-block text-lg uppercase tracking-wide lg:text-4xl"
                          wrapper="span"
                          repeat={Infinity}
                          cursor={false}
                        />
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Remarked>

            <Remarked className="h-80 min-h-80 w-full">
              <div className="h-full w-full rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
                <div className="flex size-full gap-6 rounded-xl border border-secondary/20 p-4">
                  <a
                    href="./CV - GERMAN GOHRINGER - FRONTEND DEVELOPER.pdf"
                    download
                    className="relative flex h-full w-48 min-w-48 cursor-pointer items-center justify-center rounded-lg bg-secondary/10 shadow-md transition-all duration-300 hover:bg-secondary/15"
                  >
                    <CV className="size-20 min-w-20 fill-primary/70" />
                    <ArrowDown className="absolute bottom-20 right-14 size-6 min-w-6 -translate-x-1 -translate-y-1 animate-bounce" />
                  </a>

                  <div className="flex size-full flex-col justify-around">
                    <div className="flex items-center justify-center gap-8 [&>*]:size-12">
                      <TechItem Svg={React} content="ReactJS" />
                      <TechItem
                        Svg={NextJS}
                        content="NEXT.js"
                        className="fill-primary"
                      />
                      <TechItem Svg={Typescript} content="TypeScript" />
                      <TechItem Svg={TailwindCSS} content="Tailwind CSS" />
                    </div>
                    <div className="flex items-center justify-center gap-8 [&>*]:size-12">
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
                    <div className="flex items-center justify-center gap-8 [&>*]:size-12">
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
            </Remarked>
          </section>

          <Remarked className="h-full w-1/2">
            <div className="size-full rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="size-full rounded-xl border border-secondary/20">
                <CareerDiagram />
              </div>
            </div>
          </Remarked>
        </div>

        <section className="flex h-80">
          <Remarked className="h-full w-full">
            <div className="relative flex h-full w-full gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group z-10 flex h-full w-3/5 gap-1.5">
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
              <div className="z-10 flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://misideaspintadas.com.ar/"
                    className="mr-2 flex items-center gap-5"
                  >
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                  <UserRound className="size-9 text-primary/70" />
                </div>
                <div className="flex flex-col justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Ecommerce - Full App Development
                  </p>
                  <div className="text-nowrap text-5xl font-semibold text-primary">
                    Mis Ideas Pintadas
                  </div>
                  {/* <div className="glitch text-nowrap text-6xl font-semibold text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Mis Ideas Pintadas
                      </span>
                    ))}
                  </div> */}
                </div>
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
                      "grad1 absolute right-0 top-0 z-0 h-full w-96 object-cover",
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
                      "grad1 absolute right-0 top-0 z-0 h-full w-96 object-cover",
                    )}
                  />
                </>
              )}
            </div>
          </Remarked>
        </section>

        <section className="flex h-80">
          <Remarked className="h-full w-full">
            <div className="relative flex h-full w-full gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group z-10 flex h-full w-3/5 gap-1.5">
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
              <div className="z-10 flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.stctrl.com.ar/"
                    className="flex items-center gap-3"
                  >
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                  <DPSColorLogo className="size-14 fill-primary/70" />
                </div>
                <div className="flex flex-col justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Full Frontend Development
                  </p>
                  <div className="text-6xl text-primary">
                    Seat<b>Control</b>
                  </div>
                  {/* <div className="glitch text-6xl text-primary/70">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        Seat<b>Control</b>
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>

              {animations && (
                <Image
                  alt="SCTrackng"
                  src={SCTrackng}
                  className="grad1 absolute right-0 top-0 z-0 h-full object-cover opacity-30"
                />
              )}
            </div>
          </Remarked>
        </section>

        <section className="flex h-80 gap-8">
          <Remarked className="h-full w-full">
            <div className="relative flex h-full w-full gap-8 overflow-hidden rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group flex h-full w-3/5 gap-1.5">
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
              <div className="flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.dpssoftware.com.ar/"
                    className="flex items-center gap-3"
                  >
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                  <DPSColorLogo className="size-14 fill-primary/70" />
                </div>
                <div className="flex flex-col justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Landing Page
                  </p>
                  <div className="glitch self-end text-6xl font-semibold text-primary">
                    DPS
                  </div>
                  {/* <div className="glitch self-end text-6xl font-semibold text-primary">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        DPS
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </Remarked>

          <Remarked className="h-full w-full">
            <div className="flex h-full w-full gap-8 rounded-2xl bg-secondary/10 p-4 shadow-inner-lg">
              <div className="group flex h-full w-3/5 gap-1.5">
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
              <div className="flex h-full w-2/5 flex-col items-end justify-between gap-2">
                <div className="flex items-center gap-3">
                  <a href="https://www.sigga.com.ar/">
                    <SquareArrowOutUpRight className="size-6 min-w-6" />
                  </a>
                  <DPSColorLogo className="size-14 fill-primary/70" />
                </div>
                <div className="flex flex-col items-end justify-end gap-2 p-4 text-end">
                  <p className="text-nowrap text-2xl italic text-primary/70">
                    Landing Page
                  </p>
                  <div className="glitch self-end text-6xl font-semibold text-primary">
                    SIGGA
                  </div>
                  {/* <div className="glitch self-end text-6xl font-semibold text-primary/70">
                    {Array.from({ length: 11 }).map((_, i) => (
                      <span key={i} className="line">
                        SIGGA
                      </span>
                    ))}
                  </div> */}
                </div>
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
                "group relative flex size-full h-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl bg-secondary/10 shadow-inner-lg transition-all",
              )}
            >
              <div
                className={cn(
                  theme === "dark" && "rotate-180",
                  "absolute left-1/2 top-full flex h-full w-10 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-lg text-primary/70 transition-transform duration-700",
                )}
              >
                <Sun
                  className={cn(
                    theme === "light" && "rotate-180",
                    "absolute -top-5 size-10 transition-transform duration-700",
                  )}
                />
                <Moon
                  className={cn(
                    theme === "dark" && "-rotate-180",
                    "absolute -bottom-5 size-10 transition-transform duration-700",
                  )}
                />
              </div>
              <div
                className={cn(
                  loaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-600 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
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
              <div
                className={cn(
                  loaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-750 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
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
              <div
                className={cn(
                  loaded ? "opacity-100" : "opacity-0",
                  "absolute z-0 size-24 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all delay-900 group-hover:from-white/60 group-hover:via-transparent",
                )}
              />
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
                "group flex h-full w-full items-center justify-center rounded-2xl bg-secondary/10 p-4 shadow-inner-lg transition-all delay-450",
              )}
            >
              <LinkedinLogo className="size-9 fill-primary/70 transition-all group-hover:scale-110" />
              <div
                className={cn(
                  loaded ? "opacity-100" : "opacity-0",
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
