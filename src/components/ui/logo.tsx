import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <h1 className={cn("text-2xl font-bold tracking-wider group", className)}>
      <span className="text-primary inline-block transition-transform duration-300 group-hover:-translate-y-1">
        S
      </span>
      hinku Labs
    </h1>
  );
};

export default Logo;
