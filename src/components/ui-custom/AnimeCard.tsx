
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
      <div className={`relative aspect-[3/4] w-full overflow-hidden rounded-t-lg ${getRandomGradient()}`}>
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <h3 className="font-bold text-xl md:text-2xl text-center text-white drop-shadow-md line-clamp-3">
            {anime.title}
          </h3>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
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
            <Eye className="w-4 h-4" /> Details
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-black/80 backdrop-blur-md rounded-b-lg border-t border-accent/20">
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
        
        <div className={`mt-2 transition-all duration-300 overflow-hidden ${expanded ? "max-h-48" : "max-h-12"}`}>
          <p className="text-sm text-slate-300 leading-relaxed">{anime.synopsis}</p>
        </div>
        
        {!expanded && anime.synopsis && anime.synopsis.length > 100 && (
          <button
            onClick={() => setExpanded(true)}
            className="text-xs text-accent/80 hover:text-accent mt-1"
          >
            Read more...
          </button>
        )}
      </div>
    </div>
  );
};

export default AnimeCard;
