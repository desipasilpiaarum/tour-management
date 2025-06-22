import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GuestRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          // Redirect sesuai role
          if (data.user.role === "admin") navigate("/dashboard", { replace: true });
          else navigate("/home", { replace: true });
        } else {
          setChecking(false);
        }
      } catch {
        setChecking(false);
      }
    };
    checkAuth();
  }, [navigate, location.pathname]);

  if (checking)
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <span>Loading...</span>
      </div>
    );

  return children;
};

export default GuestRoute;