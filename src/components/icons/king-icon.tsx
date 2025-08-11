import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function KingIcon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M22.5 11.63V6M20 8h5" />
        <path d="M22.5 25c-6.42 0-11.5 5.08-11.5 11.5c0 0 1.15 2.5 11.5 2.5s11.5-2.5 11.5-2.5c0-6.42-5.08-11.5-11.5-11.5z" />
        <path d="M12.5 32c0-7.5 7-12 10-20.5c3 8.5 10 13 10 20.5" />
        <path d="M11.5 39.5c0 0 9 .5 22 .5" />
      </g>
    </svg>
  );
}
