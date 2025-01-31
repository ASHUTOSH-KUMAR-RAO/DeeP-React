import { motion } from "framer-motion";

const Marki = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-[10vh] rounded-3xl overflow-hidden bg-[salmon]"
    >
      <div className="text border-t-2 border-b-2 border-gray-300 flex whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[18vw] leading-none font-sans font-extrabold uppercase pt-6 mb-10"
        >
          We are Producer's
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[18vw] leading-none font-sans font-extrabold uppercase pt-6 mb-10"
        >
          We are Producer's
        </motion.h1>
      </div>
    </div>
  );
};

export default Marki;
