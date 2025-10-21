import { useState, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import mygpLogo from "@/assets/mygp-logo.png";
import { Loader } from "@/components/ui/loader";

const Otp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "20.00";
  const { toast } = useToast();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(90);
  const [canResend, setCanResend] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  
  const { paymentMethod, accountNumber, logo, brandColor } = location.state || {};

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    if (canResend) {
      setCountdown(90);
      setCanResend(false);
      toast({
        title: "OTP Resent",
        description: "A new OTP has been sent to your number",
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleConfirm = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setLoading(true);
      setTimeout(() => {
        navigate(`/pin?amount=${amount}`, { 
          state: { paymentMethod, accountNumber, logo, brandColor } 
        });
      }, 800);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
    }
  };

  if (!paymentMethod) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#e8ebef" }}>
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with Logo */}
        <div className="bg-white p-4 border-b border-gray-200">
          <img src={logo} alt={paymentMethod} className="h-8 mx-auto" />
        </div>

        {/* Merchant Info */}
        <div className="bg-white p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mygpLogo} alt="MyGP" className="w-10 h-10 object-contain" />
            <div>
              <div className="font-semibold text-gray-800 text-sm">Merchant:MyGP-Direct Charge</div>
              <div className="text-xs text-gray-500">Inv No: {paymentMethod?.substring(0, 3).toUpperCase()}457BD374N9</div>
            </div>
          </div>
          <div className="font-bold text-gray-800">৳{amount}</div>
        </div>

        {/* OTP Section */}
        <div className="p-6" style={{ backgroundColor: brandColor }}>
          <div className="text-center mb-6">
            <label className="text-white font-medium text-sm block mb-3">
              Enter OTP sent to {accountNumber}
            </label>
            <div className="bg-white rounded-lg p-3 inline-block">
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="tel"
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                    className="w-10 h-12 text-center text-gray-800 text-lg font-medium rounded border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-center text-white text-xs">
            Didn't receive OTP?{" "}
            {canResend ? (
              <button onClick={handleResend} className="underline hover:opacity-80">
                Resend
              </button>
            ) : (
              <span className="opacity-70">
                Resend OTP in {formatTime(countdown)}
              </span>
            )}
          </div>
        </div>

        {/* Cancel Alert */}
        {showCancel && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-red-800">Are you sure you want to cancel?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCancel(false)}
                  className="px-3 py-1 text-xs bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                >
                  No
                </button>
                <button
                  onClick={() => navigate(`/payment?amount=${amount}`)}
                  className="px-3 py-1 text-xs bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="bg-white p-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => setShowCancel(true)}
            className="py-2.5 text-gray-600 font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="py-2.5 text-gray-400 font-medium rounded border border-gray-200 cursor-not-allowed flex items-center justify-center"
            disabled={otp.join("").length !== 6 || loading}
            style={
              otp.join("").length === 6 && !loading
                ? { backgroundColor: brandColor, color: "white", borderColor: brandColor, cursor: "pointer" }
                : {}
            }
          >
            {loading ? <Loader /> : "Confirm"}
          </button>
        </div>

        {/* Footer */}
        <div className="bg-white px-4 pb-4 text-center">
          {paymentMethod && (
            <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mb-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a 
                href={`tel:${
                  paymentMethod.toLowerCase() === "bkash" ? "16247" :
                  paymentMethod.toLowerCase() === "nagad" ? "16167" :
                  paymentMethod.toLowerCase() === "rocket" ? "16216" :
                  paymentMethod.toLowerCase() === "upay" ? "16268" : "16247"
                }`}
                className="font-semibold hover:underline"
              >
                {paymentMethod.toLowerCase() === "bkash" ? "16247" :
                 paymentMethod.toLowerCase() === "nagad" ? "16167" :
                 paymentMethod.toLowerCase() === "rocket" ? "16216" :
                 paymentMethod.toLowerCase() === "upay" ? "16268" : "16247"}
              </a>
            </div>
          )}
          <div className="text-xs text-gray-500">© 2023 {paymentMethod}, All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
