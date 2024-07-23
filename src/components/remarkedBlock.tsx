import type { WithChildren, WithClassName } from "@/utils/types";

export const Remarked = ({
  children,
  className,
}: WithChildren & WithClassName) => {
  return (
    <div className={className}>
      <div className="size-full relative flex justify-center items-center">
        {/* Top */}
        <div className="w-[calc(100%+250px)] z-0 h-px top-0 absolute bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        {/* Bottom */}
        <div className="w-[calc(100%+250px)] z-0 h-px bottom-0 absolute bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        {/* Left */}
        <div className="h-[calc(100%+250px)] w-px left-0 absolute bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
        {/* Right */}
        <div className="h-[calc(100%+250px)] w-px right-0 absolute bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />

        {children}
      </div>
    </div>
  );
};
