import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRout({ children }) {
  const { isAuthenticated } = useAuth();
  const navigat = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigat("/");
    },
    [isAuthenticated, navigat]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRout;
