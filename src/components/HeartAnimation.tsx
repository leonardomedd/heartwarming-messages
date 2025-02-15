
import { Heart } from "lucide-react";
import { useState } from "react";

export const HeartAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-32 h-32 flex items-center justify-center cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-love-100 rounded-full filter blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-75' : 'opacity-50'}`} />
      <Heart
        className={`w-24 h-24 text-love-500 animate-heart-beat transition-all duration-300 ${
          isHovered ? 'scale-110 text-love-600' : ''
        }`}
        fill={isHovered ? "currentColor" : "none"}
      />
    </div>
  );
};
