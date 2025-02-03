function Footer() {
    return (
        <div className="w-full bg-[#0A0A0B] py-32 relative z-0">
            <div className="max-w-screen-xl mx-auto px-20">
                {/* 상단 섹션 - 애니메이션 텍스트 */}
                <div className="flex flex-col items-center mb-32">
                    <div className="overflow-hidden mb-4 text-center">
                        <h1 className="text-[5vw] font-['Neue_Montreal'] font-medium tracking-tight text-white/90 animate-fadeIn">
                            감사합니다.
                        </h1>
                    </div>
                    <div className="overflow-hidden max-w-[90%]">
                        <p className="text-[1.1rem] leading-relaxed text-zinc-400 animate-fadeInDelay text-center">
                            개발자로 성장하기 위해 낮선 기술에도 적극적으로 도전하고, 
                            항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를 만들고 싶습니다.
                        </p>
                    </div>
                </div>

                {/* 중간 섹션 - 그리드 레이아웃 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {/* 연락처 정보 */}
                    <div>
                        <h3 className="text-zinc-400 font-['Neue_Montreal'] mb-8 text-sm tracking-wider uppercase">연락처</h3>
                        <a href="mailto:cjswogksals@naver.com" 
                           className="block text-lg text-white group relative overflow-hidden">
                            <span className="inline-block transform transition-transform duration-500 group-hover:-translate-y-full">cjswogksals@naver.com</span>
                            <span className="absolute left-0 inline-block text-[#84cc16] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">cjswogksals@naver.com</span>
                        </a>
                        <p className="text-lg text-white mt-4">010-9801-6547</p>
                    </div>

                    {/* 소셜 링크 */}
                    <div>
                        <h3 className="text-zinc-400 font-['Neue_Montreal'] mb-8 text-sm tracking-wider uppercase">소셜 미디어</h3>
                        <div className="flex flex-col gap-4">
                            <a 
                                href="https://github.com/kimhanmin-hub" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-lg text-white group relative overflow-hidden"
                            >
                                <span className="inline-block transform transition-transform duration-500 group-hover:-translate-y-full">깃허브</span>
                                <span className="absolute left-0 inline-block text-[#84cc16] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">깃허브</span>
                            </a>
                            <a 
                                href="https://velog.io/@min2012/posts" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-lg text-white group relative overflow-hidden"
                            >
                                <span className="inline-block transform transition-transform duration-500 group-hover:-translate-y-full">Velog</span>
                                <span className="absolute left-0 inline-block text-[#84cc16] transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">Velog</span>
                            </a>
                        </div>
                    </div>

                    {/* 주소 정보 */}
                    <div>
                        <h3 className="text-zinc-400 font-['Neue_Montreal'] mb-8 text-sm tracking-wider uppercase">주소</h3>
                        <p className="text-lg text-white">서울특별시 노량진로 23가길 20</p>
                    </div>
                </div>

                {/* 기술 섹션 */}
                <div className="mt-32">
                    <h3 className="text-zinc-400 font-['Neue_Montreal'] mb-8 text-sm tracking-wider uppercase">사용한 기술</h3>
                    <ul className="list-disc list-inside text-lg text-white">
                        <li>React</li>
                        <li>Framer Motion</li>
                        <li>Locomotive Scroll</li>
                        <li>gsap</li>
                        <li>Tailwind CSS</li>
                 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
