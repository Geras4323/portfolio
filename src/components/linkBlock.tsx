import { cn } from "@/utils/lib";
import type { WithChildren } from "@/utils/types";

export const LinkBlock = ({
  children,
  url,
  isLoaded,
  blockCN,
  lightCN,
}: {
  url: string;
  isLoaded: boolean;
  blockCN?: string;
  lightCN?: string;
} & WithChildren) => {
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
      {children}
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
