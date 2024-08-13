import { Arrow } from "@/assets/icons";
import Man from "@/assets/images/man-with-shirt-black.png";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="container pt-10 py-[72px]">
      <div className="relative rounded-[52px] overflow-hidden h-[500px] max-md:h-[460px] max-sm:h-[372px] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-black/25 ">
        <Image
          className="w-full h-full object-cover"
          src={Man}
          alt="man with shirt black"
        />
        <div className="lg:py-24 lg:px-[78px] px-[22px] py-[42px] flex flex-col justify-center items-center w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10">
          <span className="mb-[18px] max-lg:text-xs-custom text-sm block relative after:absolute after:h-[1px] after:w-[66px] max-xs:after:w-[40px] after:top-1/2 after:translate-x-3 after:bg-white before:absolute before:h-[1px] before:w-[66px] max-xs:before:w-[40px] max-xs:before:left-[-40px] before:top-1/2 before:-translate-x-3 before:bg-white before:left-[-66px]">
            We bring new fashion to the world
          </span>
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl max-xs:text-2xl text-center leading-[60px] font-bold font-chillax max-md:max-w-[520px]">
            DISCOVER THE LATEST FASHION TRENDS HERE
          </h1>
          <p className="max-w-[557px] text-center max-lg:text-sm max-md:text-xs">
            Discover a world of fashion with our meticulously curated outfits.
            Shop now to update your wardrobe with chic and stylish outfits.
          </p>
          <span className="flex items-center gap-[-1px] mt-[42px]">
            <Button className="bg-white text-black font-semibold">
              Start shopping
            </Button>
            <Button className="bg-white" size="icon">
              <Arrow />
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
