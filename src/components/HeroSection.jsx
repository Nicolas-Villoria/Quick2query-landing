import React from "react";

const HeroSection = ({
  title,
  highlight,
  subtitle,
  className = "",
}) => {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-32 pb-20 ${className}`}
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 animate-slide-down">
            {title}{" "}
            <span className="text-blue-600">{highlight}</span>
          </h1>
          <p
            className="text-xl text-gray-600 mb-8 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute -bottom-16 left-0 right-0 flex justify-center">
        <div className="w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
