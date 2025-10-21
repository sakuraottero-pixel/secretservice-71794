import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";

const Terms = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    return (saved as "light" | "dark") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="min-h-screen" style={{ 
      background: theme === "dark" 
        ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
        : "white", 
      padding: "24px"
    }}>

      <Header theme={theme} onThemeToggle={toggleTheme} />


      {/* Main Content */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", color: "#1f2937", marginBottom: "32px" }}>
            Terms & Conditions
          </h1>

          <div style={{ color: "#374151", lineHeight: "1.8", fontSize: "14px" }}>
            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using QafPay services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                2. Service Description
              </h2>
              <p>
                QafPay provides social media engagement services including followers, likes, views, and other engagement metrics for various social platforms. All services are delivered as described in the service packages.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                3. Payment Terms
              </h2>
              <p>
                All payments must be made in advance through our secure payment gateway. We accept various payment methods including mobile banking and cards. Promo codes must be applied at checkout and cannot be added after purchase.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                4. Refund Policy
              </h2>
              <p>
                Refunds are available within 24 hours of purchase if the service has not been initiated. Once the service delivery begins, refunds will not be issued. Contact support for any issues with your order.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                5. User Responsibilities
              </h2>
              <p>
                Users must provide accurate information including valid social media links or IDs. We are not responsible for incorrect orders due to user-provided wrong information. Users must ensure their accounts comply with platform terms of service.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                6. Service Delivery
              </h2>
              <p>
                Services typically start within 24-48 hours and are completed according to the specified delivery time. Delivery times may vary based on order size and platform restrictions. We reserve the right to split large orders.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                7. Privacy & Data Protection
              </h2>
              <p>
                We respect your privacy and protect your personal information. We do not share your data with third parties. All payment information is processed securely through encrypted channels.
              </p>
            </section>

            <section style={{ marginBottom: "32px" }}>
              <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
                8. Contact Information
              </h2>
              <p>
                For any questions or concerns regarding these terms, please contact us at support@qafpay.com. Our customer support team is available 24/7 to assist you.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        padding: "24px 32px",
        marginTop: "60px",
        textAlign: "center",
        width: "100%",
        position: "relative",
        zIndex: 1
      }}>
        <p style={{ 
          color: "#6b7280", 
          fontSize: "14px", 
          lineHeight: "1.8",
          margin: 0, 
          fontWeight: "400"
        }}>
          Genz SMM এ ২৪ ঘন্টাই সার্ভিস চালু থাকে যা অটোমেটিক সিস্টেম দ্বারা পরিচালিত....!!! যেকোনো সমস্যায় আমাদের টেলিগ্রাম এ মেসেজ দিন । ⚠ এটা পরিষ্কার এবং স্বতন্ত্র যে আমরা কোন ধরনের বেআইনি কার্যকলাপ সমর্থন করি না। আমরা সমস্ত গোপনীয়তা নীতি এবং সমস্ত সরকারী আইনকে সম্মান করি। GenZ SMM হচ্ছে Social Media Boost এর একটি নির্ভরযোগ্য প্রতিষ্ঠান, যা আমাদের অটোমেটেড সার্ভিসের আওতাভুক্ত একটি বিশেষ প্রোডাক্ট।
          <br /><br />
          © Copyright 2022. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Terms;
