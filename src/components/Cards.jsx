import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

function Cards() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
        });

        return () => {
            scroll.destroy();
        };
    }, []);

    const projects = [
        {
            title: "영상앱 ONETTUS",
            description: "영상앱 ONETTUS 프로젝트는 유튜브 api를 활용하여 만든 앱입니다. 주요 기능으로는 알고리즘 구현, 검색 기능 추가, 영상 클릭 시 화면 구현, 댓글 기능 구현이 있습니다.",
            year: "2024",
            images: [
                "/aa.png",
                "/ab.png",
                "/ac.png",
                "/ad.png"
            ],
            link: "https://hanminyoutube.netlify.app/"
        },
        {
            title: "recipeWorld",
            description: "recipeWorld는 recipe api를 활용하여 만든 것으로 재료들 (당근,감자) 등을 검색하면 이를 포함하여 만들 수 있는 요리 레시피들을 보여줍니다. 자세히 보기를 누르면 성분표와 칼로리,요리 재료,정보, 다이어트 레벨 등의 자료를 보여줍니다",
            year: "2024",
            images: [
                "recipe-1.png",
                "recipe-2.png",
                "recipe-3.png",
            ],
            link: "https://recipeworld-jfvd.onrender.com/"
        },
        {
            title: "공부한 것들",
            description: "그동안 공부한 것들에 대한 깃허브 링크입니다. 자바스크립트,리액트를 공부하였습니다.",
            year: "2024",
            images: [], // 이미지 없을 경우 빈 배열로 설정
            link: "https://github.com/kimhanmin-hub/study"
        }
    ];

    const handleCardClick = (index) => {
        setSelectedCard(index);
        setCurrentImageIndex(0);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[selectedCard].images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projects[selectedCard].images.length) % projects[selectedCard].images.length);
    };

    return (
        <div data-scroll data-scroll-section className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="cardcontainer h-[60vh] w-1/3 cursor-pointer"
                    onClick={() => handleCardClick(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div 
                        className='card relative rounded-xl w-full h-full bg-center bg-cover flex items-center justify-center'
                        style={{ 
                            backgroundImage: project.title === "영상앱 ONETTUS" ? `url('/aa.png')` : 
                                             project.title === "recipeWorld" ? `url('recipe-2.png')` : 
                                             project.title === "공부한 것들" ? `url('study.png')` : 
                                             'none' 
                        }} // 배경 이미지 설정
                    >
                        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div> {/* 어두운 오버레이 추가 */}
                        <h2 className="text-white text-3xl drop-shadow-lg">{project.title}</h2> {/* 그림자 추가 */}
                        <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 text-white drop-shadow-lg"> {/* 그림자 추가 */}
                            &copy; {project.year}
                        </button>
                    </div>
                </motion.div>
            ))}

            {selectedCard !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-8" onClick={() => setSelectedCard(null)}>
                    <div className="bg-white rounded-xl p-8 max-w-[800px] w-full" onClick={e => e.stopPropagation()}>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-bold text-gray-800">
                                {projects[selectedCard].title}
                            </h2>
                            <button onClick={() => setSelectedCard(null)} className="text-gray-800 text-2xl hover:text-gray-600">×</button>
                        </div>
                        <div className="relative mb-6">
                            <img 
                                src={projects[selectedCard].images[currentImageIndex]} 
                                alt="" 
                                className="w-full h-[300px] object-cover rounded-lg mb-4" // 일정한 크기 유지
                            />
                            <button onClick={handlePrevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700">{"<"}</button>
                            <button onClick={handleNextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full hover:bg-gray-700">{">"}</button>
                        </div>
                        <p className="text-gray-600 mb-6">
                            {projects[selectedCard].description}
                        </p>
                        <div className="flex justify-end gap-4">
                            <a 
                                href={projects[selectedCard].link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-[#004D43] text-white rounded-lg hover:bg-opacity-90"
                            >
                                사이트 방문하기
                            </a>
                            <button 
                                className="px-6 py-3 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white"
                                onClick={() => setSelectedCard(null)}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cards;
