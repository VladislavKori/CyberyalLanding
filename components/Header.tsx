import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/logo.svg";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    var element = document.getElementById("ref");
  }

  var isPrivacy = router.pathname === "/privacy";

  const handleClick = () => element?.scrollIntoView();

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <Image className="header__logo-img" src={Logo} alt="logo" />
        </div>
        <nav className="header__navbar">
          <Link className="header__link" href={"/privacy"}>
            Home
          </Link>
          {/* <Link className="header__link" href="/about">About</Link> */}
        </nav>
      </div>
      {isPrivacy ? (
        ""
      ) : (
        <button className="header__btn" onClick={handleClick}>
          Subscribe
        </button>
      )}
    </header>
  );
}

export default Header;
