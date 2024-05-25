import React from "react";
import BgPlygon from "../../assets/polygon.png";
const BgStyle = {
  backgroundImage: `url(${BgPlygon})`,
  backgroundRepeat: "no-repeat",
  brackgroundposition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};
const About = () => {
  return (
    <>
      <div style={BgStyle} className=" py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 className=" pt-20 tracking-wider text-4xl font-semibold text-white text-center">
            {" "}
            About Us
          </h1>
          {/* card section */}
          <div className=" bg-white/80 p-10 my-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem ducimus distinctio sapiente! Recusandae voluptatum,
            corporis voluptates iste doloremque eaque, sequi, velit modi id odio
            veniam molestias commodi ad? Error voluptates ipsum, accusantium
            cumque quas quaerat! Vitae ipsam illo, voluptate architecto
            molestias autem provident? Perferendis non officia modi id nobis
            praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quo, distinctio quasi consequuntur possimus ipsum voluptates.
            Voluptatem, molestias dolore dolorem adipisci deleniti eius
            repellendus, quos consequuntur eum voluptas accusantium maiores
            velit, illum at! Nobis modi quibusdam ex facilis dolorum nemo qui et
            saepe, enim quas ipsam. At odit reiciendis consequuntur explicabo
            atque quae alias iure, commodi modi fugiat, rerum molestias ipsam
            sequi cupiditate placeat? Possimus omnis numquam magni odit labore
            dolorem facere vitae, voluptatum est exercitationem tempora ipsum
            quia beatae iure quidem culpa molestiae ipsa harum. Vitae
            perspiciatis ad inventore nihil nostrum iste officiis odio
            veritatis, aliquid ab consequuntur accusamus? Eveniet!
            <div className="pt-10 flex justify-center">
              <button className=" flex justify-center  items-center gap-2  bg-secondary  text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300">
                My Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
