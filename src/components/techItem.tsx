import { type SVGProps } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";
import { type WithClassName } from "@/utils/types";
import { cn } from "@/utils/lib";

export function TechItem({
  Svg,
  content,
  className,
}: {
  Svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  content: string;
} & WithClassName) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Svg className={cn(!!className && className, "size-11")} />
      </TooltipTrigger>
      <TooltipContent
        sideOffset={5}
        className="w-fit rounded-md border border-secondary/30 bg-base-100 px-2 py-1 text-primary/70"
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
