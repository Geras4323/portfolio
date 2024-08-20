import type { SVGProps } from "react";
import { cn } from "@/utils/lib";

export const LinkBlock = ({
  url,
  isLoaded,
  SVG,
  blockCN,
  lightCN,
}: {
  url: string;
  isLoaded: boolean;
  SVG: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  blockCN?: string;
  lightCN?: string;
}) => {
  return (
    <a
      href={url}
      target="_blank"
      className={cn(
        isLoaded ? "opacity-100" : "opacity-0",
        "group flex w-full items-center justify-center rounded-xl bg-secondary/10 p-4 shadow-inner-lg transition-all 2xl:h-full",
        !!blockCN && blockCN,
      )}
    >
      <SVG className="size-8 fill-primary/70 transition-all group-hover:scale-110 2xl:size-10" />
      <div
        className={cn(
          isLoaded ? "opacity-100" : "opacity-0",
          "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all group-hover:from-white/60 group-hover:via-transparent",
          !!lightCN && lightCN,
        )}
      />
    </a>
  );
};
