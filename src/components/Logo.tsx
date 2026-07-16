import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-[0.3em] font-bold tracking-tighter", className)}>
      <img className="w-25" src="/banner.png" alt="Logo" />
    </div>
  );
}
