import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
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
import Auth from "./pages/Auth";
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
          <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/bkash" element={<ProtectedRoute><Bkash /></ProtectedRoute>} />
          <Route path="/nagad" element={<ProtectedRoute><Nagad /></ProtectedRoute>} />
          <Route path="/rocket" element={<ProtectedRoute><Rocket /></ProtectedRoute>} />
          <Route path="/upay" element={<ProtectedRoute><Upay /></ProtectedRoute>} />
          <Route path="/visa" element={<ProtectedRoute><Visa /></ProtectedRoute>} />
          <Route path="/mastercard" element={<ProtectedRoute><Mastercard /></ProtectedRoute>} />
          <Route path="/otp" element={<ProtectedRoute><Otp /></ProtectedRoute>} />
          <Route path="/pin" element={<ProtectedRoute><Pin /></ProtectedRoute>} />
          <Route path="/payment-failed" element={<ProtectedRoute><PaymentFailed /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/terms" element={<ProtectedRoute><Terms /></ProtectedRoute>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
