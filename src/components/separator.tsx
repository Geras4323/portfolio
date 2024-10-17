import { useThemeSwitcher } from "@/hooks/useThemeSwitcher";
import { cn } from "@/utils/lib";
import type { WithChildren, WithClassName } from "@/utils/types";

export const Separator = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  const { theme } = useThemeSwitcher();

  return (
    <div
      className={cn(
        theme === "dark" ? "bg-[#1c1c1caa]" : "bg-[#f3f3f3aa]",
        !!className && className,
      )}
    >
      {children}
    </div>
  );
};
