import { useNavigate, useLocation } from "react-router-dom";
import { X } from "lucide-react";

const PaymentFailed = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { paymentMethod, logo, brandColor } = location.state || {};

  const getHelplineNumber = () => {
    const method = paymentMethod?.toLowerCase();
    if (method === "bkash") return "16247";
    if (method === "nagad") return "16167";
    if (method === "rocket") return "16216";
    if (method === "upay") return "16268";
    return "16247";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#e8ebef" }}>
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header with Logo */}
        {logo && (
          <div className="bg-white p-4 border-b border-gray-200">
            <img src={logo} alt={paymentMethod} className="h-8 mx-auto" />
          </div>
        )}

        {/* Failed Icon */}
        <div className="p-8 text-center">
          <div 
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: brandColor || "#dc2626" }}
          >
            <X className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h2>
          <p className="text-gray-600 mb-6">
            Your payment could not be processed. Please try again or contact helpline.
          </p>

          {/* Helpline */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-1">
              <svg className="w-5 h-5" style={{ color: brandColor || "#dc2626" }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>Need help?</span>
            </div>
            <a 
              href={`tel:${getHelplineNumber()}`}
              className="text-lg font-bold hover:underline"
              style={{ color: brandColor || "#dc2626" }}
            >
              {getHelplineNumber()}
            </a>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate("/")}
              className="py-2.5 text-gray-600 font-medium rounded border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => navigate(-2)}
              className="py-2.5 text-white font-medium rounded transition-colors"
              style={{ backgroundColor: brandColor || "#dc2626" }}
            >
              Try Again
            </button>
          </div>
        </div>

        {/* Footer */}
        {paymentMethod && (
          <div className="bg-white px-4 pb-4 text-center border-t border-gray-200">
            <div className="text-xs text-gray-500 pt-4">© 2023 {paymentMethod}, All Rights Reserved</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentFailed;
