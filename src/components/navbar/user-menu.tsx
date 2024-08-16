import { User } from "@/assets/icons";
import Link from "next/link";

const UserMenu = () => {
  return (
    <li className="h-6">
      <Link
        href="#"
        className="inline-flex gap-1 items-center text-lg lg:text-base"
      >
        <User />
        <span>Account</span>
      </Link>
    </li>
  );
};

export default UserMenu;
