import { CircleCheck } from "@/assets/icons";

const SucessPage = () => {
  return (
    <div className="flex justify-center items-center pb-32 lg:pb-[353px] pt-28 lg:pt-[132px]">
      <div className="max-w-[335px] w-full md:max-w-[428px] flex flex-col items-center justify-center">
        <CircleCheck />
        <h2 className="text-lg font-semibold mt-2.5">Thanks for your order!</h2>
        <p className="text-xs text-dark-gray">
          The order confirmation has been sent to johndoe@gmail.com
        </p>
      </div>
    </div>
  );
};

export default SucessPage;
