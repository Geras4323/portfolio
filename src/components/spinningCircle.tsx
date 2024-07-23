import { cn } from "@/utils/lib";
import type { WithClassName } from "@/utils/types";

export const SpinningCircle = ({ className }: WithClassName) => {
  return (
    <div className={cn(!!className && className, "absolute -z-10 blur")}>
      <div className="relative flex items-center justify-center [&>*]:absolute [&>*]:rounded-full [&>*]:border-t-4">
        <div className="h-[354px] w-[354px] animate-[spin_2s_linear_infinite] border-t-violet-700" />
        <div className="h-[364px] w-[364px] animate-[spin_2.2s_linear_infinite] border-t-cyan-700" />
        <div className="h-[374px] w-[374px] animate-[spin_2.4s_linear_infinite] border-t-red-700" />
        <div className="h-[384px] w-[384px] animate-[spin_2.6s_linear_infinite] border-t-blue-700" />
      </div>
    </div>
  );
};
