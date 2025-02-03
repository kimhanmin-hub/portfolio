import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180);
        })
    })

    return (
        <div data-scroll data-scroll-section className="eyes relative w-full h-screen overflow-hidden bg-[#0F0F0F]">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-[10vh] left-[10vw] z-10"
            >
                <h2 className="text-[6vw] leading-[1.1] tracking-tighter font-['Pretendard'] text-white mix-blend-difference">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                        className="block"
                    >
                        어떤
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="flex items-center gap-5"
                    >
                        <span className="text-[#2563EB]">프로젝트</span>
                        <span className="text-white">를</span>
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        className="block"
                    >
                        진행했나요?
                    </motion.span>
                </h2>
            </motion.div>

            <div data-scroll data-scroll-speed="-.7" className="relative w-full h-full">
                <div className="absolute w-[15vw] h-[15vw] rounded-full bg-[#2563EB] blur-3xl opacity-20 top-20 right-32"></div>
                <div className="absolute w-[15vw] h-[15vw] rounded-full bg-[#7C3AED] blur-3xl opacity-20 bottom-10 left-20"></div>
                
                <div className="absolute flex gap-10 top-[60%] left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100">
                        <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
                            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-32 right-52 w-[8vw] h-[8vw] rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] opacity-30"></div>
                <div className="absolute top-40 left-40 w-[5vw] h-[5vw] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB] opacity-20"></div>
            </div>
        </div>
    );
}

export default Eyes;
