
import { Anime } from "@/types/anime";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: AnimeCardProps) => {
  return (
    <div className="w-full h-full p-6 rounded-lg bg-gradient-to-br from-purple-700 to-indigo-900 shadow-lg">
      <p className="text-xl leading-relaxed text-white">{anime.synopsis}</p>
    </div>
  );
};

export default AnimeCard;
