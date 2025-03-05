
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Anime } from "@/types/anime";
import AnimeCard from "@/components/ui-custom/AnimeCard";
import PageLayout from "@/components/layout/PageLayout";
import { toast } from "sonner";

const AnimeResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];
  const query = location.state?.query || "";

  const handleBack = () => {
    navigate("/");
  };

  // If there are no results, show a message and redirect back
  if (results.length === 0) {
    toast.info("No results to display");
    navigate("/");
    return null;
  }

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2 text-slate-300 hover:text-white" 
          onClick={handleBack}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to search
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Results for "{query}"</h1>
          <div className="w-32 h-1 bg-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((anime: Anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default AnimeResults;
