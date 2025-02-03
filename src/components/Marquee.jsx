import { motion } from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".05" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#1B262C]">
      <div className="text border-t-2 border-b-2 border-opacity-20 border-white flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase pt-25 -mb-[-1vw] font-semibold pr-20 text-[#E5E5E5]">
            •̀ɞ•́ ABOUT ME
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase pt-25 -mb-[2vw] font-semibold pr-20 text-[#E5E5E5]">
          •̀ɞ•́ABOUT ME
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
