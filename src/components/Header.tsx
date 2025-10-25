import { useNavigate } from "react-router-dom";
import { Menu, X, Sun, Moon, LogOut } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/genzsmm-logo.png";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

const Header = ({ theme, onThemeToggle }: HeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
      navigate("/auth");
    }
  };

  return (
    <header style={{
      padding: "16px 20px",
      marginBottom: "32px",
      width: "100%",
      position: "relative",
      zIndex: 2000,
      background: theme === "dark" 
        ? "linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      boxShadow: theme === "dark" 
        ? "0 4px 20px rgba(0, 0, 0, 0.3)"
        : "0 4px 20px rgba(0, 0, 0, 0.05)",
      border: theme === "dark"
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(0, 0, 0, 0.05)"
    }}>
      <style>{`
        @media (max-width: 768px) {
          header {
            padding: 12px 16px !important;
            margin-bottom: 24px !important;
          }
          .header-logo {
            height: 32px !important;
          }
          .header-title {
            font-size: 14px !important;
            letter-spacing: 0.2px !important;
          }
          header button {
            padding: 5px !important;
          }
          header button svg {
            width: 18px !important;
            height: 18px !important;
          }
        }
      `}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "12px",
            cursor: "pointer" 
          }}
          onClick={() => navigate("/")}
        >
          <img 
            src={logo} 
            alt="GenZ SMM Logo" 
            className="header-logo"
            style={{ 
              height: "40px",
              width: "auto",
              filter: theme === "dark" ? "drop-shadow(0 0 10px rgba(102, 126, 234, 0.3))" : "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1))"
            }} 
          />
          <h1 
            className="header-title"
            style={{ 
              fontSize: "18px", 
              fontWeight: "800", 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              margin: 0,
              letterSpacing: "0.5px"
            }}
          >
            PROMO SHOP
          </h1>
        </div>
        
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <button
            onClick={onThemeToggle}
            style={{
              background: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#f3f4f6",
              border: theme === "dark" ? "2px solid rgba(255, 255, 255, 0.2)" : "2px solid #e5e7eb",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              color: theme === "dark" ? "white" : "#1f2937"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "#e5e7eb";
              e.currentTarget.style.borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "#d1d5db";
              e.currentTarget.style.transform = "scale(1.08) rotate(5deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#f3f4f6";
              e.currentTarget.style.borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "#e5e7eb";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-5 h-5 sm:w-[22px] sm:h-[22px]" /> : <Moon className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#f3f4f6",
              border: theme === "dark" ? "2px solid rgba(255, 255, 255, 0.2)" : "2px solid #e5e7eb",
              borderRadius: "8px",
              cursor: "pointer",
              padding: "6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              color: theme === "dark" ? "white" : "#1f2937"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "#e5e7eb";
              e.currentTarget.style.borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "#d1d5db";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "#f3f4f6";
              e.currentTarget.style.borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "#e5e7eb";
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            aria-label="Toggle menu"
          >
            <div style={{
              transition: "transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
              transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)"
            }}>
              {isMenuOpen ? <X className="w-[18px] h-[18px] sm:w-5 sm:h-5" /> : <Menu className="w-[18px] h-[18px] sm:w-5 sm:h-5" />}
            </div>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 10px)",
          right: "20px",
          background: theme === "dark" ? "rgba(26, 26, 46, 0.98)" : "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(20px)",
          borderRadius: "16px",
          padding: "12px",
          boxShadow: "0 12px 48px rgba(0, 0, 0, 0.3)",
          minWidth: "220px",
          zIndex: 1000,
          border: theme === "dark" ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.1)"
        }}>
          <button
            onClick={() => { navigate("/"); setIsMenuOpen(false); }}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: theme === "dark" ? "white" : "#1f2937",
              padding: "14px 18px",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              marginBottom: "4px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme === "dark" ? "white" : "#1f2937";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            Home
          </button>
          <button
            onClick={() => { navigate("/orders"); setIsMenuOpen(false); }}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: theme === "dark" ? "white" : "#1f2937",
              padding: "14px 18px",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              marginBottom: "4px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme === "dark" ? "white" : "#1f2937";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            My Orders
          </button>
          <button
            onClick={() => { navigate("/terms"); setIsMenuOpen(false); }}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: theme === "dark" ? "white" : "#1f2937",
              padding: "14px 18px",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              marginBottom: "4px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme === "dark" ? "white" : "#1f2937";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: theme === "dark" ? "#f87171" : "#dc2626",
              padding: "14px 18px",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "600",
              borderRadius: "10px",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#dc2626";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme === "dark" ? "#f87171" : "#dc2626";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <LogOut style={{ width: "18px", height: "18px" }} />
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
