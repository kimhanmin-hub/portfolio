import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion"

function LandingPage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-[#F8F9FA] pt-1">
            <div className="textstructure mt-52 px-40  pl-[30vw]">
                {["항상 발전하는", "개발자", "포트폴리오"].map((item, index) => {
                    return (
                        <div className='masker' key={index}>
                            <div className="w-fit flex items-end overflow-hidden">
                                {index === 1 && (
                                    <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "24vw" }} 
                                    transition={{ ease: [0.76, 0, 0.24, 1],duration: 1 }} 
                                    className="mr-[1vw] w-[14vw] rounded-md h-[20vw] -top-[2.3vw] relative overflow-hidden"
                                    >
                                        <img 
                                            src="/public/face.jpg" 
                                            alt="얼굴1"
                                            className="w-full h-full object-cover"
                                        />
                                    </motion.div>
                                )}
                                <h1 className={`${
                                    index === 1 ? 'translate-y-[-2vw]' : ''
                                } pt-[3vw] mb-[5vw] uppercase text-[7vw] leading-[0.1vw] -tracking-[0.3vw] font-["Founders_Grotesk_X-Condensed"] font-bold text-[#212529]`}>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] border-[#DEE2E6] mt-20 flex justify-between items-center py-5 px-20">
                {["For public", "from the first"]
                    .map((item, index) => (
                        <p className="text-md font-light tracking-tight leading-none text-[#495057]" key={index}>{item}</p>
                    ))}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] border-[#DEE2E6] font-light text-md uppercase rounded-full text-[#495057]">맨 밑으로</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-[#DEE2E6] rounded-full text-[#495057]">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;