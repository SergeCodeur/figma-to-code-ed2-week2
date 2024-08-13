import { navLinksRight } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserMenu from "./UserMenu";

const NavLinksRight = ({ className }: { className?: string }) => {
  return (
    <ul className={cn(className, "items-center gap-[18px]")}>
      {navLinksRight.map((link, index) => (
        <li key={index}>
          <Link className="text-lg lg:text-base" href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
      <UserMenu />
    </ul>
  );
};

export default NavLinksRight;
