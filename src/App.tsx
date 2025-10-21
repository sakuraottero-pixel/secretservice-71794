import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Index from "./pages/Index";
import Payment from "./pages/Payment";
import Bkash from "./pages/Bkash";
import Nagad from "./pages/Nagad";
import Rocket from "./pages/Rocket";
import Upay from "./pages/Upay";
import Visa from "./pages/Visa";
import Mastercard from "./pages/Mastercard";
import Otp from "./pages/Otp";
import Pin from "./pages/Pin";
import PaymentFailed from "./pages/PaymentFailed";
import Orders from "./pages/Orders";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Index />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/bkash" element={<Bkash />} />
          <Route path="/nagad" element={<Nagad />} />
          <Route path="/rocket" element={<Rocket />} />
          <Route path="/upay" element={<Upay />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/mastercard" element={<Mastercard />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/pin" element={<Pin />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
