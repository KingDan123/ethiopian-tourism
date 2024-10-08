
import React, { useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function LazyImage({ src, alt, className }) {
  const imgRef = useRef(null);
  const isVisible = useIntersectionObserver(imgRef, { threshold: 0.1 });

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : ""}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}

export default LazyImage;
