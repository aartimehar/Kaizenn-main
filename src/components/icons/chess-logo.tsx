import { cn } from "@/lib/utils";
import type { SVGProps } from "react";
import { KnightIcon } from "./knight-icon";

export function ChessLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" >
        <KnightIcon className={cn("h-8 w-8", props.className)} />
        <span className="text-xl font-bold">KaizenChess</span>
    </div>
  );
}
