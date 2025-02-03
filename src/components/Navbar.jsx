import { useRef } from 'react';

function Navbar({ sections }) {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 flex justify-between items-center mix-blend-difference text-white">
      <div className="logo flex items-center gap-2">
        <span className="text-lg font-['Pretendard'] font-medium">항상 발전하는-개발자</span>
        <span className="text-lg font-['Pretendard']">✦</span>
        <span className="text-lg font-['Pretendard'] font-medium">김한민</span>
      </div>
      <div className="links flex gap-10">
        {["인터뷰", "이력", "기술", "개인 공부", "프로젝트"].map((item, index) => (
          <a
            key={index}
            className={`text-lg font-['Pretendard'] font-normal tracking-tight hover:opacity-50 transition-opacity ${index === 4 && "ml-20"}`}
            onClick={() => sections[index].current.scrollIntoView({ behavior: 'smooth' })}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
