import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function RookIcon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M9 39.5h27" />
        <path d="M12.5 32c-1.5 0-3 .5-3-2.5s1.5-2.5 3-2.5" />
        <path d="M32.5 32c1.5 0 3 .5 3-2.5s-1.5-2.5-3-2.5" />
        <path d="M12 36.5v-4.5h21v4.5" />
        <path d="M14 29.5v-13h17v13" />
        <path d="M14 16.5l-3-4.5h23l-3 4.5" />
        <path d="M11 12h23" />
        <path d="M12 12V6h3.5v3h5V6h5v3h5V6h3.5v6" />
      </g>
    </svg>
  );
}
