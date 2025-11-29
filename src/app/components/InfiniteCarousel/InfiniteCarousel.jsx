import React, { useRef, useEffect, useState } from "react";
import "./carousel.css";

export default function InfiniteCarousel() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const SPEED = 0.5; // Auto-scroll speed

  // Auto move effect
  useEffect(() => {
    let animationFrame;

    const autoScroll = () => {
      if (!isDragging && trackRef.current) {
        trackRef.current.scrollLeft += SPEED;
        // Reset scroll to the start when reaching half (because duplicated content)
        if (
          trackRef.current.scrollLeft >=
          trackRef.current.scrollWidth / 2
        ) {
          trackRef.current.scrollLeft = 0;
        }
      }
      console.log(trackRef.current.scrollLeft );
      animationFrame = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Mouse Down
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // Mouse Leave
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Mouse Up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse Move
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag sensitivity
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="carousel-wrapper">
    <div>{scrollLeft}</div>
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {/* Duplicate list for infinite scroll */}
        {[...Array(2)].map((_, i) => (
          <div className="carousel-content" key={i}>
            <div className="item">Item 1</div>
            <div className="item">Item 2</div>
            <div className="item">Item 3</div>
            <div className="item">Item 4</div>
            <div className="item">Item 5</div>
          </div>
        ))}
      </div>
    </div>
  );
}
