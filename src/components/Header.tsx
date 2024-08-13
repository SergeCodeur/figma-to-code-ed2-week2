"use client";
import Navbar from "./navbar/Navbar";
import PromoBanner from "./PromoBanner";

const Header = () => {
  return (
    <header>
      <PromoBanner />
      <Navbar />
    </header>
  );
};

export default Header;
