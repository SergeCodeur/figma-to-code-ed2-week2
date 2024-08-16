"use client";
import Navbar from "./navbar/Navbar";
import PromoBanner from "./promo-banner";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <PromoBanner />
      <Navbar />
    </header>
  );
};

export default Header;
