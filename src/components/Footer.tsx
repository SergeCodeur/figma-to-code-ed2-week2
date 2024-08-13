import LogoLight from "@/assets/images/logo-light.svg";
import {
  categoriesLinks,
  productLinks,
  socialsLinks,
} from "@/constants/footerLinks";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="py-[52px] bg-black space-y-8">
      <footer className="container flex justify-between flex-wrap gap-5">
        <div className="md:max-w-[452px] w-full">
          <Link href="#" className="inline-flex">
            <Image src={LogoLight} alt="logo" />
          </Link>
          <p className="text-gray text-xs md:text-sm mb-4">
            Subscribe to our newsletter for upcoming products and best discount
            for all items
          </p>
          <form action="" className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-white placeholder:text-white text-white"
            />
            <Button
              type="submit"
              className="bg-white text-black text-sm font-semibold"
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="md:max-w-[392px] w-full flex flex-wrap gap-5 md:gap-[52px]">
          <div className="space-y-2">
            <h3 className="text-xs md:text-base font-semibold text-white">
              Product
            </h3>
            <ul className="space-y-0.5 text-gray">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <Link className="text-xs-custom md:text-sm" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs md:text-base font-semibold text-white">
              Categories
            </h3>
            <ul className="space-y-0.5 text-gray">
              {categoriesLinks.map((item, index) => (
                <li key={index}>
                  <Link className="text-xs-custom md:text-sm" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xs md:text-base font-semibold text-white">
              Our Socials Media
            </h3>
            <ul className="space-y-0.5 text-gray">
              {socialsLinks.map((item, index) => (
                <li key={index}>
                  <Link className="text-xs-custom md:text-sm" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
      <div className="flex justify-center">
        <p className="text-dark-gray text-xs-custom md:text-xs">
          © BALLAMAS 2024 by{" "}
          <a href="#" className="underline underline-offset-2">
            waris
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
