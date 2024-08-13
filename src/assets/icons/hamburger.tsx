"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import HamburgerLine from "./hamburger-line";

type HamburgerProps = {
  clasName?: string;
  onClick: () => void;
};

const Hamburger = ({ clasName, onClick }: HamburgerProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };
  return (
    <span
      className={cn(
        clasName,
        "cursor-pointer lg:hidden flex flex-col justify-center items-center gap-2 h-6 w-[42px]"
      )}
      onClick={handleClick}
    >
      <HamburgerLine
        className={`${
          isActive ? "rotate-[25deg] translate-y-1.5" : ""
        } transition-transform duration-300`}
      />
      <HamburgerLine
        className={`${
          isActive ? "-rotate-[25deg] -translate-y-1.5" : ""
        } transition-transform duration-300`}
      />
    </span>
  );
};

export default Hamburger;
