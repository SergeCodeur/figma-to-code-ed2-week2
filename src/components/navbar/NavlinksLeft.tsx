import { navLinksLeft } from "@/constants/navLinks";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavlinksLeft = ({ className }: { className?: string }) => {
  return (
    <>
      <ul className={cn(className, "gap-[18px] items-center")}>
        {navLinksLeft.map((link, index) => (
          <li key={index}>
            <Link className="text-lg lg:text-base" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavlinksLeft;
