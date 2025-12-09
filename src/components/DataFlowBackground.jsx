import React, { useEffect, useRef } from "react";

const DataFlowBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    let scrollSpeed = 0;
    let isTouching = false; // Track if user is actively touching
    let lastTouchTime = 0; // Track last touch time to ignore emulated mouse events
    let forceMultiplier = 1; // Adjust force based on device/screen size

    // Configuration
    const particleDensity = 0.06; // Particles per pixel width
    const particleCount = Math.floor(window.innerWidth * particleDensity); // Dynamic particle count
    const connectionDistance = 150; // Distance to connect
    const baseSpeed = 0.5;
    const colors = ["#00B3A4", "#6C63FF", "#00E0E0"]; // Primary, Tech, Accent

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Reduce force on smaller screens (mobile)
      forceMultiplier = window.innerWidth < 768 ? 0.7 : 1;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.originalX = this.x;
        this.originalY = this.y;
      }

      update() {
        // Mouse/Touch interaction (Repel/Attract)
        // Only apply force if touching (on mobile) or always (on desktop with mouse)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 300;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance && isTouching) {
          // Attract towards mouse/touch (Data Query effect)
          this.vx += forceDirectionX * force * 0.5 * forceMultiplier;
          this.vy += forceDirectionY * force * 0.5 * forceMultiplier;
        }

        // Scroll effect (Speed up vertically)
        this.y += scrollSpeed * 0.1;

        // Base movement
        this.x += this.vx;
        this.y += this.vy;

        // Friction to return to normal speed
        this.vx *= 0.98;
        this.vy *= 0.98;

        // Keep base speed minimum
        if (Math.abs(this.vx) < baseSpeed)
          this.vx = (Math.random() - 0.5) * baseSpeed;
        if (Math.abs(this.vy) < baseSpeed)
          this.vy = (Math.random() - 0.5) * baseSpeed;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;

        // Teleport with randomization on vertical scroll wrap
        if (this.y < 0) {
          this.y = canvas.height + Math.random() * 20;
          this.x = Math.random() * canvas.width;
        }
        if (this.y > canvas.height) {
          this.y = -Math.random() * 20;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Gradient line
            const gradient = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            gradient.addColorStop(0, particles[i].color);
            gradient.addColorStop(1, particles[j].color);

            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 1 - distance / connectionDistance;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Listeners
    const handleMouseMove = (e) => {
      // Ignore mouse events if they are likely emulated from touch
      if (Date.now() - lastTouchTime < 500) return;

      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      isTouching = true; // Desktop mouse is always "touching"
    };

    const handleTouchStart = (e) => {
      lastTouchTime = Date.now();
      isTouching = true;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouse.x = touch.clientX - rect.left;
      mouse.y = touch.clientY - rect.top;
    };

    const handleTouchMove = (e) => {
      if (isTouching) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouse.x = touch.clientX - rect.left;
        mouse.y = touch.clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      lastTouchTime = Date.now();
      isTouching = false;
      // Move mouse off-screen when touch ends
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleScroll = () => {
      // Limit scroll speed with dampening factor and max cap
      const maxScrollEffect = 100; // Maximum scroll effect
      const dampeningFactor = 0.1; // Reduces the scroll impact
      scrollSpeed = Math.min(window.scrollY * dampeningFactor, maxScrollEffect);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("scroll", handleScroll);

    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-neutral/20 to-white"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      {/* Overlay to fade out at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
    </div>
  );
};

export default DataFlowBackground;
