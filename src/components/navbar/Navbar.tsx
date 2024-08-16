"use client";
import { Hamburger, Search } from "@/assets/icons";
import Logo from "@/assets/images/logo-dark.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ShoppingCart from "../products/shopping-cart";
import NavlinksLeft from "./navlinks-left";
import NavLinksRight from "./navlinks-right";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <div className="container">
      <nav className="flex h-[76px] items-center justify-between w-full border-b-[0.5px] border-light-gray bg-white z-50">
        <Hamburger onClick={onClick} />
        <NavlinksLeft className="hidden lg:inline-flex " />

        <Link href="/">
          <Image src={Logo} alt="logo" priority />
        </Link>

        <div className="inline-flex gap-[18px] items-center">
          <NavLinksRight className="hidden lg:inline-flex" />

          <div className="flex gap-[18px] max-lg:flex-row-reverse">
            <ShoppingCart />
            <button>
              <Search />
            </button>
          </div>
        </div>
      </nav>

      {/* Tablet and mobile menu */}
      <div
        className={`lg:hidden space-y-[42px] ${
          open
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        } absolute z-50 inset-x-0 top-[124px] pt-[26px] w-full h-[calc(100vh-124px)] bg-white transition-opacity duration-300`}
      >
        <div className="flex flex-col gap-[18px]">
          <NavlinksLeft className="lg:hidden inline-flex flex-col" />
          <NavLinksRight className="inline-flex flex-col" />
        </div>
        <ul className="flex flex-col justify-center items-center gap-[18px]">
          <li>
            <Link className="text-lg" href="">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="text-lg" href="">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
