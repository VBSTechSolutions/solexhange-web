import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './Circles.css';
import { imager } from '../../AboutImage/Allimage'; // Import the images as an array or adjust as per your setup
import { images } from '../../Image/Allimage';

const RotatingCircles = () => {
  const imageArray = [ imager.Shoes4,imager.Shoes1, imager.Shoes2, imager.Shoes3]; // Add more images as needed
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    // Apply GSAP animation for rotating text
    gsap.set(".circles__text", { transformOrigin: "50% 50%" });
    gsap.to(".circles__text", {
      duration: 10,
      ease: "none",
      rotation: "+=360",
      repeat: -1
    });

    // Set interval to change image every 4 seconds
    const intervalId = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    }, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="allarecenter">
      <svg className="circles" width="60vmin" height="60vmin" viewBox="0 0 1400 1400">
        <defs>
          <path id="circle-1" d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5" />
        </defs>

        <text className="circles__text circles__text--1">
          <textPath href="#circle-1" aria-label="" textLength="2750">
            HOW IT WORK HOW IT WORK
          </textPath>
        </text>

        {/* Display the active image */}
        <image
          href={imageArray[activeImageIndex]} // Use active image based on current index
          width="60%"
          height="70%"
          className="custom-icon"
          x="250"
          y="200"
        />
      </svg>
    </div>
  );
};

export default RotatingCircles;
