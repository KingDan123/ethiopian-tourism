
import React, { useState, useEffect } from "react";
import styles from "../EthiopiaExplorer.module.css";
import { setAriaLabel, addKeyboardSupport } from "../utils/accessibility";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const button = document.getElementById("scrollToTopButton");
    if (button) {
      setAriaLabel(button, "Scroll to top of page");
      addKeyboardSupport(button, scrollToTop);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      id="scrollToTopButton"
      className={styles.scrollToTopButton}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
}

export default ScrollToTop;
