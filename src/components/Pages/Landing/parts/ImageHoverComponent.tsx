import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../Styles/imageHoverEffect.css";

interface ImageHoverEffectProps {
  image: string;
  hoverText?: string;
  buttonImage?: string;
  link?: string;
}

const ImageHoverEffect: React.FC<ImageHoverEffectProps> = ({
  image,
  hoverText = "Описание",
  buttonImage,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className="image-hover-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`image-wrapper ${isHovered ? "blurred" : ""}`}>
        <img src={image} alt="Card" className="image" />
      </div>

      {isHovered && (
        <div className="hover-content">
          <div className="text-container">
            <p className="hover-text">{hoverText}</p>
          </div>
          {buttonImage && (
            <button className="hover-button-image" onClick={handleButtonClick}>
              <img
                src={buttonImage}
                alt="Action button"
                className="button-image"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageHoverEffect;
