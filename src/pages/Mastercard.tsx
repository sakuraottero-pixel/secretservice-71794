import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import mastercardLogo from "@/assets/mastercard-logo.png";
import mygpLogo from "@/assets/mygp-logo.png";
import { Loader } from "@/components/ui/loader";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Mastercard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "20.00";
  const { toast } = useToast();
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(" ") : cleaned;
  };

  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardNumber.replace(/\s/g, "").length === 16 && cvv.length === 3 && expiry.length === 5) {
      setLoading(true);
      setTimeout(() => {
        toast({
          title: "Payment successful!",
          description: "Your Mastercard payment has been processed",
        });
        setTimeout(() => navigate("/"), 2000);
      }, 800);
    } else {
      toast({
        title: "Invalid card details",
        description: "Please check your card information",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#e8ebef" }}>
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with Logo */}
        <div className="bg-white p-4 border-b border-gray-200">
          <img src={mastercardLogo} alt="Mastercard" className="h-8 mx-auto" />
        </div>

        {/* Merchant Info */}
        <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mygpLogo} alt="MyGP" className="w-10 h-10 object-contain" />
            <div>
              <div className="font-semibold text-gray-800 text-sm">Merchant:MyGP-Direct Charge</div>
              <div className="text-xs text-gray-500">Inv No: MC457BD374N9</div>
            </div>
          </div>
          <div className="font-bold text-gray-800">৳{amount}</div>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16));
                setCardNumber(formatted);
              }}
              maxLength={19}
              className="w-full px-4 py-2.5 rounded border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
            <input
              type="text"
              placeholder="JOHN DOE"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
              className="w-full px-4 py-2.5 rounded border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                maxLength={5}
                className="w-full px-4 py-2.5 rounded border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input
                type="password"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                maxLength={3}
                className="w-full px-4 py-2.5 rounded border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 tracking-widest"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowCancelDialog(true)}
              className="py-2.5 text-gray-600 font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="py-2.5 text-white font-medium rounded disabled:opacity-50 flex items-center justify-center"
              style={{ backgroundColor: "#eb001b" }}
            >
              {loading ? <Loader className="text-[#E2136E]" /> : "Pay Now"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="bg-white px-4 pb-4 text-center">
          <div className="text-xs text-gray-500">Secured by Mastercard • PCI DSS Compliant</div>
        </div>
      </div>

      <AlertDialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Payment?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel the order?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, Continue</AlertDialogCancel>
            <AlertDialogAction onClick={() => navigate(`/payment?amount=${amount}`)}>
              Yes, Cancel
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Mastercard;
