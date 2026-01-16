import React, { useEffect, useRef } from "react";

const BackgroundGradient = () => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${x * 30}px, ${
          y * 30
        }px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${x * -30}px, ${
          y * -30
        }px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${x * 20}px, ${
          y * -20
        }px)`;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (blob1Ref.current) {
        blob1Ref.current.style.top = `calc(-10% + ${scrollY * 0.05}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.top = `calc(40% + ${scrollY * -0.05}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.top = `calc(20% + ${scrollY * 0.02}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden -z-10 pointer-events-none"
      aria-hidden="true"
    >
      {/* Blob 1 - Tech Purple */}
      <div
        ref={blob1Ref}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] transition-transform duration-100 ease-out will-change-transform"
      >
        <div className="w-full h-full bg-tech/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
      </div>

      {/* Blob 2 - Primary Teal */}
      <div
        ref={blob2Ref}
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] transition-transform duration-100 ease-out will-change-transform"
      >
        <div className="w-full h-full bg-primary/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      {/* Blob 3 - Accent Cyan */}
      <div
        ref={blob3Ref}
        className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] transition-transform duration-100 ease-out will-change-transform"
      >
        <div className="w-full h-full bg-accent/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Overlay for texture/noise if desired, or just a subtle gradient to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/0 to-white"></div>
    </div>
  );
};

export default BackgroundGradient;
