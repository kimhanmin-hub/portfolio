function About() {
    return (
        <div className="w-full p-20 bg-[#F8F9FA] rounded-tl-3xl rounded-tr-3xl text-[#111111]">
            <h1 className="font-['Pretendard'] text-[1.5vw] leading-[3.2vw] tracking-tight">
                <span className="block mb-10 text-[1.5vw] font-medium text-[#666666]">Q. 프론트엔드를 지향하는 이유</span>
                <span className="block mb-16 whitespace-pre-line">
                    {'사용자의 첫인상을 디자인하는 매력에 빠졌습니다. \n특히 인터랙티브한 애니메이션 구현에서 느끼는 \n즉각적인 피드백과 창의적 도전이 \n저를 끊임없이 성장시킵니다.'}
                </span>

                <span className="block mb-10 text-[1.5vw] font-medium text-[#666666]">Q. 일에 있어 가장 중요하게 생각하는 것</span>
                <span className="block mb-16 whitespace-pre-line">
                    {'"왜"라는 질문을 끊임없이 던지는 것입니다. \n단순히 기능 구현에 그치지 않고, \n각 코드의 존재 이유와 더 나은 방법을 고민하는 \n과정이 혁신을 만든다고 믿습니다.'}
                </span>

                <span className="block mb-10 text-[1.5vw] font-medium text-[#666666]">Q. 자기 계발을 위해 해온 것들</span>
                <span className="block whitespace-pre-line">
                    {'매일 아침 React 공식 문서 한 섹션 정독, \n주 1회 개발자 스터디 참여, 그리고 매월 새로운 \nCSS 애니메이션 기법 하나를 마스터하는 것을 규칙으로 삼았습니다. \n특히 Framer Motion을 활용한 모션 그래픽 프로젝트를 통해 \n기술적 깊이를 더했습니다.'}
                </span>
            </h1>
            <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#E5E5E5]">
                <div className="w-1/2">
                    <h1 className="text-5xl font-medium">More About Me</h1>
                    <a href="https://velog.io/@min2012/posts" target="_blank" rel="noopener noreferrer">
                        <button className="flex uppercase gap-10 items-center px-10 py-6 bg-[#111111] mt-10 rounded-full text-white hover:bg-[#2C2C2C] transition-colors">
                            Velog 들어가기
                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                        </button>
                    </a>
                </div>
                <div className="w-1/2 h-[65vh] rounded-3xl bg-[#F1F3F5] bg-cover" style={{ backgroundImage: "url('/profile.jpg')" }}></div>
            </div>
        </div>
    )
}

export default About;
