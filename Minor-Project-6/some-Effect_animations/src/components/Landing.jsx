import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
const Landing = () => {
  return (
    <div data-scroll  data-scroll-speed="-.2" className="w-full h-screen bg-zinc-500  pt-1">
      <div className="fontstruct mt-48 px-20">
        {["An Intresting", "Character-I's", "Presenting Here"].map(
          (item, index) => (
            <div className="masker ">
              <div className="w-fit flex items-center  ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[8vw] h-[5.4vw] relative -bottom-1 bg-green-500 mr-2 rounded-md"
                  ></motion.div>
                )}
                <h1 className=" flex uppercase text-[7vw] leading-[6vw] tracking-tighter font-bold items-center h-full">
                  {item}
                </h1>
              </div>
            </div>
          )
        )}
      </div>
      <div className="border-t-[2px] border-green-200 mt-20 flex justify-between items-center px-20 py-5">
        {["For public and private Movies", "For the Love storis shooting"].map(
          (item, index) => (
            <p className="font-medium leading-none tracking-tight">{item}</p>
          )
        )}
        <div className="start flex items-center gap-6">
          <div className=" uppercase border-[2px] px-3 py-2 rounded-full border-orange-200 hover:cursor-pointer hover:bg-sky-200 hover:font-bold hover:text-black">
            Start The Shooting
          </div>
          <div className="h-8 w-8 rounded-full border-[2px] border-orange-200 flex items-center justify-center  ">
            <span className="rotate-[45deg] cursor-pointer hover:scale-110">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
