import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function PawnIcon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M22.5 6.5a4 4 0 1 1 0 8a4 4 0 0 1 0-8z" />
        <path d="M22.5 26.5c-5 0-9 2-9 6.5c0 2.5 4 5.5 9 5.5s9-3 9-5.5c0-4.5-4-6.5-9-6.5z" />
        <path d="M20.5 26.5l-2.5-9l9-1.5l-2 10.5" />
      </g>
    </svg>
  );
}
