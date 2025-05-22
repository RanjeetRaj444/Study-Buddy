import React, { useState } from "react";
import LoginModal from "../Pages/LoginModal";

export default function PriveteRoute({ children }) {
  const [loginOpen, setLoginOpen] = useState(true);

  const token = localStorage.getItem("token");
  if (!token) {
    return <LoginModal loginOpen={loginOpen} setLoginOpen={setLoginOpen} />;
  }
  return <div>{children}</div>;
}
