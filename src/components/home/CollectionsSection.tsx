import { Arrow } from "@/assets/icons";
import ManWithJacket from "@/assets/images/black-man-white-jacket.png";
import Man from "@/assets/images/man-with-suit.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const CollectionsSection = () => {
  return (
    <section className="container space-y-9 pb-24">
      <div className="space-y-1">
        <h2 className="font-chillax text-center uppercase font-semibold text-3xl lg:text-4xl">
          Our Collections
        </h2>
        <p className="text-sm md:text-base text-center w-full text-dark-gray font-medium">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </div>
      <div className="flex max-sm:flex-col gap-4 max-w-[996px] lg:h-[446px] mx-auto">
        <div className="relative lg:max-w-[305px] w-full lg:h-full h-[446px] rounded-4xl overflow-hidden after:absolute after:inset-0 after:bg-black/20">
          <Image
            src={ManWithJacket}
            alt="black man with jacket"
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full flex flex-col items-center justify-end pb-6 inset-0 z-10 text-white">
            <Button
              asChild
              className="bg-white text-black font-semibold text-sm"
            >
              <Link href="#" className="uppercase flex items-center gap-1">
                <span className="block">Learn More</span>
                <Arrow />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full lg:h-full h-[446px] rounded-4xl overflow-hidden after:absolute after:inset-0 after:bg-black/20">
          <Image
            src={Man}
            alt="black man with suit"
            className="w-full h-full object-center object-cover"
          />
          <div className="absolute w-full h-full flex flex-col items-center justify-center inset-0 z-10 text-white">
            <h3 className="font-chillax text-3xl md:text-5xl font-bold text-outline">
              CLASSIC MEN
            </h3>
            <p className="lg:text-lg text-sm">
              We&apos;re changing the way things get made
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
