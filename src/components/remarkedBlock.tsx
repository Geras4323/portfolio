import type { WithChildren, WithClassName } from "@/utils/types";

export const Remarked = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  return (
    <div className={className}>
      <div className="relative flex size-full items-center justify-center">
        {/* Top */}
        <div className="absolute top-0 z-0 h-px w-[calc(100%+250px)] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        {/* Bottom */}
        <div className="absolute bottom-0 z-0 h-px w-[calc(100%+250px)] bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        {/* Left */}
        <div className="absolute left-0 h-[calc(100%+250px)] w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
        {/* Right */}
        <div className="absolute right-0 h-[calc(100%+250px)] w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />

        {children}
      </div>
    </div>
  );
};
