import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-[0.3em] font-bold tracking-tighter", className)}>
      <div className="flex items-center justify-center w-[1.2em] h-[1.2em] rounded-[0.3em] bg-[#16ac77] text-white flex-shrink-0 shadow-sm">
        <span className="text-[0.8em] leading-none font-extrabold translate-y-[0.05em]">S</span>
      </div>
      <span className={dark ? "text-white" : "text-foreground"}>Synco</span>
    </div>
  );
}
