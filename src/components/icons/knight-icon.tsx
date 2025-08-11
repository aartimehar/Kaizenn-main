import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function KnightIcon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M22 36.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0z" />
        <path d="M14.5 32.5c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
        <path d="M15.5 25c3-1.5 4-6.5 4-12.5c0-3.1-1.3-5-2.5-5c-1 0-2.5 2-2.5 4.5c0 1.5.5 3 1.5 4c-1.5 1-4 1.5-6.5 1.5" />
        <path d="m10 39.5c4.66.2 8.32.2 11 0c-1-1.5-1.5-2-2-3c-3-1-4-1.5-4-3.5c0-2 1.5-5.5 1.5-5.5C12.5 27.5 13 30 13 32.5" />
        <path d="m31 39.5c-4.66.2-8.32.2-11 0c1-1.5 1.5-2 2-3c3-1 4-1.5 4-3.5c0-2-1.5-5.5-1.5-5.5c0 0-.5 2.5-1.5 3" />
        <path d="M21 8.5c0 2 .5 4 1.5 5.5c-1.5 1-2.5 1.5-2.5 2.5c-.5 2 0 4.5 1 5.5c-1 1-1.5 2-1.5 2.5" />
      </g>
    </svg>
  );
}
