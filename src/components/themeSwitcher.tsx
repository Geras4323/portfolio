import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { cn } from "@/utils/lib";
import { Moon, Sun } from "lucide-react";

export const ThemeSwitcher = ({
  isLoaded,
  showLight = false,
  blockCN,
  lightCN,
}: {
  isLoaded: boolean;
  showLight?: boolean;
  blockCN?: string;
  lightCN?: string;
}) => {
  const { theme, switchTheme } = useThemeSwitcher();
  return (
    <div
      onClick={switchTheme}
      className={cn(
        isLoaded ? "opacity-100" : "opacity-0",
        "group relative col-span-1 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-secondary/10 transition-all 2xl:h-full",
        !!blockCN && blockCN,
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
      {showLight && (
        <div
          className={cn(
            isLoaded ? "opacity-100" : "opacity-0",
            "absolute z-0 size-20 rounded-full bg-gradient-radial from-white/50 via-transparent to-transparent blur-xl transition-all group-hover:from-white/60 group-hover:via-transparent",
            !!lightCN && lightCN,
          )}
        />
      )}
    </div>
  );
};
