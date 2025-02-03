import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Featured() {
    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    const handleCardClick = (index) => {
        setSelectedCard(index);
        setModalOpen(true);
    };

    // 슬라이더 설정
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const campImages = Array.from({ length: 7 }, (_, i) => `/camp-${i + 1}.png`);
    const coinImages = Array.from({ length: 9 }, (_, i) => `/coin-${i + 1}.png`);
    const foodImages = Array.from({ length: 6 }, (_, i) => `/food-${i + 1}.png`);
    const emailImages = Array.from({ length: 4 }, (_, i) => `/email-${i + 1}.png`);

    const projectDescriptions = [
        {
            title: "FYDE",
            description: "캠프찾기 프로젝트는 캠프지를 등록하고 위치를 제공하는 프로젝트입니다.",
            features: [
                "• 캠프지 등록(이미지 포함) 기능 구현",
                "• 캠프 위치 자동 추척 기능 구현",
                "• 회원가입 기능 구현",
                "• 회원가입 이용자만 캠프 등록 구현",
                "• 지구본에 위치 등록 기능 구현",
                "• 리뷰 및 별점 등록 기능 구현",
            ],
            projectLink: "https://campworld-2.onrender.com/", 
            detailsLink: "https://github.com/kimhanmin-hub/campworld", 
        },
        {
            title: "CRYPTO",
            description: "CRYPTO 프로젝트는 데이터 기반의 투자 플랫폼을 제공합니다.",
            features: [
                "• 1시간 마다 데이터 분석 구현",
                "• 코인 설명 글요약 구현",
                "• 두가지 코인의 차트 비교 기능 구현",
                "• 데이터 차트 기능 분기,가격 총거래량 구현",
                "• 웹 반응형 기능 구현",
                "• 즐겨 찾기 등록 및 모아보기 기능 구현",
                "• 색상 반전 구현",
                "• GRID, LIST형 목록 보기 기능 구현",
            ],
            projectLink: "https://hanmincrypto.netlify.app/", 
            detailsLink: "https://github.com/kimhanmin-hub/crypto-project", 
        },
        {
            title: "Fooides",
            description: "Foodies는 음식점을 등록하고 회원들끼리 채팅을 할 수 있는 커뮤니티 앱입니다.",
            features: [
                "• 사용자들 간 채팅 기능 구현",
                "• 운영자, 일반 회원 구분 기능",
                "• 로그인 한 유저만 글 등록 할 수 있게 기능 구현",
                "• 운영자는 회원들 글 삭제 및 회원 탈퇴 처리 기능 구현",
                "• 리뷰 및 평점의 평균 기능 구현",

            ],
        },
        {
            title: "이메일 인증",
            description: "이메일 인증 프로젝트는 실제 이메일로 인증번호를 발송해 가입할 수 있게 만드는 프로젝트입니다.",
            features: [
                "• 이메일 인증 시스템 구현",
                "• 비밀번호 찾기를 이메일 인증으로 찾기 구현",
                "• 회원가입 기능 구현",
            ],
            projectLink: "https://mern-auth-frontend-ten.vercel.app/", 
            detailsLink: "https://github.com/kimhanmin-hub/mern_auth_backend", 
        },
    ];

    return (
        <div className="w-full py-20 bg-white">
            <div className="w-full px-20 border-b-[1px] border-gray-300 pb-20">
                <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight text-gray-800">진행한 프로젝트</h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        onClick={() => handleCardClick(0)}
                        className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer"
                    >
                        <h1 className="absolute flex text-[#4A90E2] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl">
                            {"CAMP찾기".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
                            <img className="w-full h-full object-cover" src="camp-1.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div 
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        onClick={() => handleCardClick(1)}
                        className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer"
                    >
                        <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
                            <h1 className="absolute flex overflow-hidden flex text-[#4A90E2] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                                {"CRYPTO".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className="inline-block"
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img className="w-full h-full cover" src="coin-1.png" alt="" />
                        </div>
                    </motion.div>
                </div>
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(2)}
                        onHoverEnd={() => handleHoverEnd(2)}
                        onClick={() => handleCardClick(2)}
                        className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer"
                    >
                        <h1 className="absolute flex text-[#4A90E2] overflow-hidden right-0 translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl">
                            {"FOODIES".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[2]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                    className="inline-block"
                                    key={index}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
                            <img className="w-full h-full cover" src="food.webp" alt="" />
                        </div>
                    </motion.div>
                    <motion.div 
                        onHoverStart={() => handleHover(3)}
                        onHoverEnd={() => handleHoverEnd(3)}
                        onClick={() => handleCardClick(3)}
                        className="cardcontainer relative w-1/2 h-[75vh] cursor-pointer"
                    >
                        <div className="card w-full h-full rounded-xl overflow-hidden shadow-lg">
                            <h1 className="absolute flex overflow-hidden flex text-[#4A90E2] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl">
                                {"이메일 가입".split('').map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[3]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className="inline-block"
                                        key={index}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </h1>
                            <img className="w-full h-full object-cover" src="email-1.png" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-8" onClick={() => setModalOpen(false)}>
                    <div className="bg-white rounded-xl p-8 max-w-[1000px] w-full" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">
                                {projectDescriptions[selectedCard].title} 
                            </h2>
                            <button onClick={() => setModalOpen(false)} className="text-gray-800 text-2xl hover:text-gray-600">×</button>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
    {selectedCard === 0 ? (
        <Slider {...sliderSettings}>
            {campImages.map((image, index) => (
                <div key={index}>
                    <img 
                        src={image} 
                        alt={`Camp ${index + 1}`} 
                        className="w-full h-[430px] rounded-lg"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            ))}
        </Slider>
    ) : selectedCard === 1 ? (
        <Slider {...sliderSettings}>
            {coinImages.map((image, index) => (
                <div key={index}>
                    <img 
                        src={image} 
                        alt={`Coin ${index + 1}`} 
                        className="w-full h-[430px] rounded-lg"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            ))}
        </Slider>
    ) : selectedCard === 2 ? (
        <Slider {...sliderSettings}>
            {foodImages.map((image, index) => (
                <div key={index}>
                    <img 
                        src={image} 
                        alt={`Food ${index + 1}`} 
                        className="w-full h-[430px] rounded-lg"
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            ))}
        </Slider>
    ) : selectedCard === 3 ? ( // MAZE 카드 추가
        <Slider {...sliderSettings}>
            {emailImages.map((image, index) => (
                <div key={index}>
                    <img 
                        src={image} 
                        alt={`Email ${index + 1}`} 
                        className="w-full h-[430px] rounded-lg"
                        style={{ objectFit: "cover" }} 
                    />
                </div>
            ))}
        </Slider>
    ) : (
        <img 
            src="email-2.png" 
            alt="" 
            className="w-full h-auto rounded-lg mb-4"
            style={{ objectFit: "contain" }} 
        />
    )}
                            <div className="flex flex-col justify-between">
                                <div style={{ minHeight: "550px" }}>
                                    <h3 className="text-xl text-gray-800 mb-4">프로젝트 설명</h3>
                                    <p className="text-gray-600 mb-6">
                                        {projectDescriptions[selectedCard].description}
                                    </p>
                                    <div className="space-y-2 text-gray-600">
                                        {projectDescriptions[selectedCard].features.map((feature, index) => (
                                            <p key={index}>{feature}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <a 
                                        href="{projectDescriptions[selectedCard].projectLink}" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#4A90E2] text-white px-6 py-3 rounded-lg hover:bg-opacity-90"
                                    >
                                        프로젝트 방문하기
                                    </a>
                                    <a 
        href={projectDescriptions[selectedCard].detailsLink} // 자세히 보기 링크 적용
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white"
    >
        자세히 보기
    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Featured;

   