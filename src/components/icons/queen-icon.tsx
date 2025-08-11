import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function QueenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 45 45"
      {...props}
      className={cn("fill-current", props.className)}
    >
      <g stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9.5l3 3l-3 3l3 3l-3 3l7.5 7.5l7.5-7.5l-3-3l3-3l-3-3l3-3l-7.5-7l-7.5 7z" />
        <path d="M12 30.5s4 4 10.5 4s10.5-4 10.5-4" />
        <path d="M12.5 39.5c0 0 9 .5 20 .5" />
        <circle cx="6" cy="6" r="1.5" />
        <circle cx="12" cy="9.5" r="1.5" />
        <circle cx="18" cy="6" r="1.5" />
        <circle cx="22.5" cy="2.5" r="1.5" />
        <circle cx="27" cy="6" r="1.5" />
        <circle cx="33" cy="9.5" r="1.5" />
        <circle cx="39" cy="6" r="1.5" />
      </g>
    </svg>
  );
}
