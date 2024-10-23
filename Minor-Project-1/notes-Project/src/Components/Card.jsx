import { FaFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      className=" flex-shrink-0 relative w-60 h-72 rounded-[50px] bg-sky-500/90 text-2xl text-white  overflow-hidden px-8 py-10 font-semibold"
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">
        {data.discription}
      </p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex items-center justify-between mb-2 px-8 py-3">
          <h4>{data.file}</h4>
          <span className="rounded-full h-8 w-8 flex items-center justify-center bg-sky-300 px-2 py-3 text-black">
            {data.closeorAvailable ? (
              <IoMdClose />
            ) : (
              <MdDownloading size=".9em" color="#000" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full ${
              data.tag.tagColor === "red" ? "bg-red-500" : "bg-pink-400"
            } py-4 flex items-center justify-center`}
          >
            <h4 className="text-sm font-semibold">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

// whileDrag={{scale:2.5}}
