import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function BishopIcon(props: SVGProps<SVGSVGElement>) {
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
        <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2" />
        <path d="M15 32c-3 0-6-2-6-4s3-4 6-4" />
        <path d="M30 32c3 0 6-2 6-4s-3-4-6-4" />
        <path d="M22.5 8.5c-1.66 0-3-1.12-3-2.5 0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.38-1.34 2.5-3 2.5z" />
        <path d="M22.5 25c-3.04 0-5.5-2.46-5.5-5.5s2.46-5.5 5.5-5.5 5.5 2.46 5.5 5.5-2.46 5.5-5.5 5.5z" />
        <path d="M12.5 32c0-7.5 7-12 10-20.5 3 8.5 10 13 10 20.5" />
        <path d="M20.1 12.5a2.5 2.5 0 0 1-2.5-2.5c0-.97.55-1.82 1.37-2.24" />
      </g>
    </svg>
  );
}