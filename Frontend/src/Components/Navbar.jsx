import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <div>
            <img src="" alt="images" />
        </div>

      <Link to={"/"}>Home</Link>
      <Link to={"/explanations"}>Expert solutions</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/signup"}>Signup</Link>
    </div>
  );
};

export default Navbar;
