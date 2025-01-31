import { motion, useAnimation } from "framer-motion";
import React from "react";

const Features = () => {
  const all = [useAnimation(), useAnimation()];
  const handlHOver = (index) => {
    all[index].start({ y: "0" });
  };
  const handlHOverEnd = (index) => {
    all[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-green-900 pb-10">
        <h1 className="text-8xl">
          <b>Mentality 👽):</b>
        </h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handlHOver(0)}
            onHoverEnd={() => handlHOverEnd(0)}
            className="cardContainer relative w-1/2  h-[80vh]"
          >
            <h1 className="text-[lightseagreen] font-semibold text-5xl top-1/2 -translate-y-1/2 left-full -translate-x-1/2 leading-none tracking-tight absolute z-[9] flex overflow-hidden ">
              {"With Love".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100" }}
                  animate={all[0]}
                  transition={{ ease: [0.22, 1, 0.36, 0], delay: index * 0.01 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl  overflow-hidden  ">
              <img
                className="w-full h-full bg-cover"
                src="https://img.freepik.com/free-photo/smiling-looking-camera-young-couple-valentines-day-holding-heart-balloon-isolated-blue-background_141793-110570.jpg?t=st=1736593478~exp=1736597078~hmac=78217f915b642e13b05bd0626b17e955692377e0a296f29aab9fd970d4aad544&w=1060"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlHOver(1)}
            onHoverEnd={() => handlHOverEnd(1)}
            className="cardContainer w-1/2 relative h-[80vh] "
          >
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="text-[lightseagreen] font-semibold text-5xl top-1/2 -translate-y-1/2 right-full translate-x-1/2 leading-none tracking-tight absolute z-[9] flex overflow-hidden ">
                {"Without Love".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100" }}
                    animate={all[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 0],
                      delay: index * 0.01,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover "
                src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1736593766~exp=1736597366~hmac=50f962c8fb72cf5a2ea4a93b1553c8dc455c2ff1575254b6f2610f0302f06efd&w=1060"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
