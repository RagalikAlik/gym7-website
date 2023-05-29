import {useState} from "react";

const GradientHoverComponent = () => {
    const [isHovered, setHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setHovered(true);
    };
  
    const handleMouseLeave = () => {
      setHovered(false);
    };
  
    const gradientStyle = {
      background: isHovered ? 'linear-gradient(to right, #ff0000, #0000ff)' : 'linear-gradient(to right, #0000ff, #ff0000)',
      
    };

    return (
        <div
          className="gradient-hover"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={gradientStyle}
        >
          {/* Остальной контент компонента */}
        </div>
      );
    };

export default GradientHoverComponent