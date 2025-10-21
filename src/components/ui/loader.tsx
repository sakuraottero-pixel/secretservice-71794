import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className={cn("flex gap-1 items-center justify-center", className)}>
      <div className="w-2 h-2 rounded-full animate-[bounce_1s_ease-in-out_0s_infinite]" style={{ backgroundColor: 'rgb(226,19,110)' }} />
      <div className="w-2 h-2 rounded-full animate-[bounce_1s_ease-in-out_0.1s_infinite]" style={{ backgroundColor: 'rgb(226,19,110)' }} />
      <div className="w-2 h-2 rounded-full animate-[bounce_1s_ease-in-out_0.2s_infinite]" style={{ backgroundColor: 'rgb(226,19,110)' }} />
      <div className="w-2 h-2 rounded-full animate-[bounce_1s_ease-in-out_0.3s_infinite]" style={{ backgroundColor: 'rgb(226,19,110)' }} />
    </div>
  );
}
