import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const styleButton ={
    margin:"1rem"
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Cambia este valor según cuándo deseas mostrar el botón
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top-button" onClick={scrollToTop} style={styleButton}>
          Subir al inicio
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
