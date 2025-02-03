// LoadingScreen.jsx
import './LoadingScreen.css'; // CSS 파일을 임포트

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-text">
        로딩 중.. 
        {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;
 