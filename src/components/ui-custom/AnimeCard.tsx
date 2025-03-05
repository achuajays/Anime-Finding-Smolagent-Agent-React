
import { useState } from "react";
import { Anime } from "@/types/anime";
import { Eye, Star, BookOpen, Clock } from "lucide-react";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const getRandomGradient = () => {
    const gradients = [
      "bg-gradient-to-br from-purple-700 to-indigo-900",
      "bg-gradient-to-br from-red-700 to-pink-800",
      "bg-gradient-to-br from-blue-700 to-cyan-900",
      "bg-gradient-to-br from-emerald-700 to-teal-900",
      "bg-gradient-to-br from-amber-600 to-orange-800"
    ];
    
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  return (
    <div className="manga-card animate-slide-up group h-full">
      <div className={`relative w-full overflow-hidden rounded-lg ${getRandomGradient()} p-5 shadow-lg`}>
        <div className="flex flex-col h-full">
          <h3 className="font-bold text-xl md:text-2xl text-center text-white drop-shadow-md mb-4">
            {anime.title}
          </h3>
          
          <div className="flex justify-between items-center mb-4">
            {anime.score && (
              <div className="flex items-center bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">
                <Star className="w-4 h-4 text-yellow-400 mr-1.5" fill="currentColor" />
                <span className="text-sm font-medium">{anime.score.toFixed(1)}</span>
              </div>
            )}
            <button 
              onClick={() => setExpanded(!expanded)}
              className="bg-accent hover:bg-accent/90 text-white rounded-md px-3 py-1.5 text-sm flex items-center gap-1.5 transition-colors shadow-lg"
            >
              <Eye className="w-4 h-4" /> {expanded ? "Less" : "Details"}
            </button>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-3">
            {anime.genres?.slice(0, 3).map((genre, index) => (
              <span 
                key={index} 
                className="text-xs bg-accent/20 text-accent px-2.5 py-1 rounded-full font-medium"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1 opacity-70" />
              <span>2023</span>
            </div>
            
            <div className="flex items-center text-xs text-slate-300">
              <BookOpen className="w-3.5 h-3.5 mr-1 opacity-70" />
              <span>24 eps</span>
            </div>
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-96" : "max-h-12"}`}>
            <p className="text-sm text-slate-300 leading-relaxed">{anime.synopsis}</p>
          </div>
          
          {!expanded && anime.synopsis && anime.synopsis.length > 100 && (
            <button
              onClick={() => setExpanded(true)}
              className="text-xs text-accent/80 hover:text-accent mt-2"
            >
              Read more...
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
