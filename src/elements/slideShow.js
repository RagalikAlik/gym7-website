import { useState } from "react";
import '../style/App.css'

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const previousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="slideshow">
        <button className="slideshow-button" onClick={previousSlide}>Назад</button>
        <img className="slideshow-image" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="slideshow-button" onClick={nextSlide}>Вперед</button>
      </div>
    );
  };

  export default Slideshow