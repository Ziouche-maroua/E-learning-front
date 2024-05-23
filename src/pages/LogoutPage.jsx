import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();
  useEffect(() => {
    Cookies.remove("token");
    navigate("/login");
  }, []);
  return <div className="pt-15">loading Log out page ...</div>;
}

export default LogoutPage;
