import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const Orders = () => {
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Load pending orders from localStorage
  const [pendingOrders, setPendingOrders] = useState<any[]>([]);

  useEffect(() => {
    const loadPendingOrders = () => {
      const stored = localStorage.getItem('pendingOrders');
      if (stored) {
        try {
          setPendingOrders(JSON.parse(stored));
        } catch (e) {
          console.error('Failed to parse pending orders:', e);
        }
      }
    };
    loadPendingOrders();
  }, []);

  const handlePayNow = (order: any) => {
    const params = new URLSearchParams({
      serviceId: order.serviceId,
      serviceName: order.serviceName,
      platform: order.platform,
      amount: order.amount,
      target: order.target,
      promo: order.promo
    });
    navigate(`/payment?${params.toString()}`);
  };

  const handleCancelOrder = (orderId: string) => {
    const updated = pendingOrders.filter(o => o.id !== orderId);
    setPendingOrders(updated);
    localStorage.setItem('pendingOrders', JSON.stringify(updated));
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
          padding: "32px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#1f2937", marginBottom: "24px" }}>
            Your Orders
          </h1>

          {pendingOrders.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <div style={{ 
                width: "120px", 
                height: "120px", 
                margin: "0 auto 24px", 
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0.1"
              }}>
                <svg style={{ width: "60px", height: "60px", color: "white" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937", marginBottom: "12px" }}>
                No Orders Yet
              </h3>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "24px", lineHeight: "1.6" }}>
                Start your journey by ordering your first service.
                <br />
                Boost your social media presence today!
              </p>
              <button
                onClick={() => navigate("/")}
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "12px 28px",
                  borderRadius: "12px",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer",
                  boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease"
                }}
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {pendingOrders.map((order) => (
                <div
                  key={order.id}
                  style={{
                    background: "white",
                    border: "2px solid #fef3c7",
                    borderRadius: "16px",
                    padding: "20px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
                    <div style={{ flex: "1", minWidth: "200px" }}>
                      <div style={{ fontSize: "18px", fontWeight: "600", color: "#1f2937", marginBottom: "4px" }}>
                        {order.serviceName}
                      </div>
                      <div style={{ fontSize: "14px", color: "#6b7280", marginBottom: "8px" }}>
                        {order.platform} • {order.target}
                      </div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "600",
                          background: "#fef3c7",
                          color: "#d97706"
                        }}
                      >
                        ⏳ Pending Payment
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                      <div style={{ fontSize: "24px", fontWeight: "700", color: "#667eea" }}>
                        ৳{order.amount}
                      </div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button
                          onClick={() => handlePayNow(order)}
                          style={{
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "white",
                            border: "none",
                            padding: "8px 20px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(102, 126, 234, 0.3)",
                            transition: "all 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 2px 8px rgba(102, 126, 234, 0.3)";
                          }}
                        >
                          Pay & Confirm
                        </button>
                        <button
                          onClick={() => handleCancelOrder(order.id)}
                          style={{
                            background: "transparent",
                            color: "#dc2626",
                            border: "2px solid #dc2626",
                            padding: "8px 16px",
                            borderRadius: "8px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            transition: "all 0.2s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#dc2626";
                            e.currentTarget.style.color = "white";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#dc2626";
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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

export default Orders;
