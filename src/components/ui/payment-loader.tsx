import { cn } from "@/lib/utils";

interface PaymentLoaderProps {
  className?: string;
}

export function PaymentLoader({ className }: PaymentLoaderProps) {
  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <div 
        className="w-8 h-8 rounded-full border-2 border-gray-200 border-t-[rgb(226,19,110)] animate-spin"
        style={{
          animation: "spin 0.8s linear infinite"
        }}
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
