import React from "react";
import HeroImg from "../../assets/hero.png";
import PrimaryButton from "../shared/PrimaryButton";
import HeroBg from "../../assets/heroBg.png";
const BgStyle = {
  backgroundImage: `url(${HeroBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
const Hero = () => {
  return (
    <>
      <div style={BgStyle} className=" relative z-[-1]">
        <div className="container py-16 sm:py-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px] ">
            {/* text content section */}
            <div className=" space-y-7 text-dark order-2 sm:order-1">
              <h1 className=" text-5xl">
                {" "}
                Fresh and healthy Meal plan{" "}
                <span className=" text-secondary font-cursive text-7xl">
                  Delivery{" "}
                </span>
                in Maiami
              </h1>
              <p className="lg:pr-64">
                Delicious Meals Deliverd to your Door form $132.95 per week
              </p>
              {/* {Button section} */}
              <div>
                <PrimaryButton />
              </div>
            </div>
            {/* img section */}
            <div className=" order-1 sm:order-2 relative z-30">
              <img
                src={HeroImg}
                alt=""
                className=" w-full sm:scale-125  translate-y-16"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
