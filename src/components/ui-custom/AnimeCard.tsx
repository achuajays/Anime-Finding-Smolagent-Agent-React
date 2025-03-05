
import { useState } from "react";
import { Anime } from "@/types/anime";
import { Eye, Star } from "lucide-react";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="manga-card animate-slide-up group">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-slate-700 animate-pulse"></div>
        )}
        <img
          src={anime.image_url}
          alt={anime.title}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
          {anime.score && (
            <div className="flex items-center bg-black/80 backdrop-blur-sm px-2 py-1 rounded-md">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-sm font-medium">{anime.score.toFixed(1)}</span>
            </div>
          )}
          <button className="bg-accent hover:bg-accent/90 text-white rounded-md px-3 py-1 text-sm flex items-center gap-1 transition-colors">
            <Eye className="w-4 h-4" /> Details
          </button>
        </div>
      </div>
      
      <div className="p-4 bg-black/80">
        <div className="flex flex-wrap gap-1 mb-2">
          {anime.genres?.slice(0, 3).map((genre, index) => (
            <span 
              key={index} 
              className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-lg line-clamp-1">{anime.title}</h3>
        <p className="mt-2 text-sm text-slate-300 line-clamp-3">{anime.synopsis}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
