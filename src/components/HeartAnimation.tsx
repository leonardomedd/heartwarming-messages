
import { Heart } from "lucide-react";
import { useState, useCallback } from "react";

export const HeartAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToMessageForm = useCallback(() => {
    const messageForm = document.getElementById("message-form");
    messageForm?.scrollIntoView({ behavior: "smooth" });

    // Create floating hearts
    for (let i = 0; i < 6; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.className = "fixed text-2xl pointer-events-none animate-float";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.top = "50%";
      heart.style.animation = `float ${2 + Math.random()}s ease-out forwards`;
      document.body.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => heart.remove(), 3000);
    }
  }, []);

  return (
    <div 
      className="relative w-40 h-40 flex items-center justify-center cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={scrollToMessageForm}
    >
      {/* Multiple glowing layers */}
      <div className={`absolute inset-0 bg-love-200 rounded-full filter blur-xl transition-all duration-500 group-hover:scale-150 ${isHovered ? 'opacity-75' : 'opacity-30'}`} />
      <div className={`absolute inset-4 bg-love-300 rounded-full filter blur-lg transition-all duration-500 group-hover:scale-125 ${isHovered ? 'opacity-60' : 'opacity-20'}`} />
      <div className={`absolute inset-8 bg-love-400 rounded-full filter blur-md transition-all duration-500 ${isHovered ? 'opacity-50' : 'opacity-10'}`} />
      
      {/* Main heart */}
      <Heart
        className={`w-28 h-28 text-love-500 transition-all duration-500
          animate-[heart-beat_1.2s_ease-in-out_infinite] 
          group-hover:text-love-600 group-hover:animate-[heart-beat_0.8s_ease-in-out_infinite]
          relative z-10
          ${isHovered ? 'scale-125' : 'scale-100'}`}
        fill={isHovered ? "currentColor" : "none"}
        strokeWidth={isHovered ? 1.5 : 2}
      />
      
      {/* Particle effects */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-love-300 rounded-full animate-[float_2s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-love-200 rounded-full animate-[float_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-8 right-4 w-2 h-2 bg-love-400 rounded-full animate-[float_1.8s_ease-in-out_infinite]" style={{ animationDelay: '0.8s' }} />
      </div>
    </div>
  );
};
