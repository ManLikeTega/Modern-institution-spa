import { useEffect, useState, useRef } from "react";

const SnowOverlay = () => {
  const [snowflakes, setSnowflakes] = useState(() => {
    // Initialize snowflakes in useState instead of useEffect
    const createSnowflake = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 10 + 5,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    });

    return Array.from({ length: 50 }, createSnowflake);
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    // Only setup interval, don't set state directly
    const createSnowflake = () => ({
      id: Math.random(),
      left: Math.random() * 100,
      size: Math.random() * 10 + 5,
      opacity: Math.random() * 0.5 + 0.3,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    });

    // Set up interval to add new snowflakes
    intervalRef.current = setInterval(() => {
      setSnowflakes((prev) => {
        const newFlakes = [...prev.slice(-100)];
        newFlakes.push(createSnowflake());
        return newFlakes;
      });
    }, 1000);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 rounded-full bg-white"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `fall ${flake.duration}s linear ${flake.delay}s infinite`,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default SnowOverlay;
