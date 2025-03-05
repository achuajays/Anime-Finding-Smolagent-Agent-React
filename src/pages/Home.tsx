
import { useState } from "react";
import { toast } from "sonner";
import { searchAnime } from "@/services/animeService";
import { Anime } from "@/types/anime";
import SearchBar from "@/components/ui-custom/SearchBar";
import AnimeCard from "@/components/ui-custom/AnimeCard";
import SampleQueries from "@/components/ui-custom/SampleQueries";
import PageLayout from "@/components/layout/PageLayout";
import { Upload, Zap, Search } from "lucide-react";

const Home = () => {
  const [results, setResults] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await searchAnime({ query });
      setResults(response.results);
      setHasSearched(true);
      if (response.results.length === 0) {
        toast.info("No results found for your query.");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error("An error occurred during search. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageLayout>
      <div className="relative min-h-screen">
        {/* Background with blur overlay */}
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://cdn.myanimelist.net/images/anime/1223/96541.jpg')" 
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-background"></div>
        </div>

        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <section className="py-20 md:py-32 flex flex-col items-center text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 flex flex-col gap-1 animate-fade-in">
                <div className="uppercase tracking-wider text-sm font-medium text-accent">Adventure • Fantasy • Action</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Discover Your Next <span className="text-accent">Anime</span> Adventure
                </h1>
              </div>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Find your next favorite anime series using natural language queries. Our AI understands what you're looking for and delivers personalized recommendations.
              </p>
              
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <SearchBar onSearch={handleSearch} isLoading={loading} />
                <SampleQueries onSelect={handleSearch} />
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
                <FeatureItem 
                  icon={<Search className="w-5 h-5 text-accent" />}
                  text="Smart Search"
                  delay="0.3s"
                />
                <FeatureItem 
                  icon={<Zap className="w-5 h-5 text-accent" />}
                  text="Fast Results"
                  delay="0.4s"
                />
                <FeatureItem 
                  icon={<Upload className="w-5 h-5 text-accent" />}
                  text="Latest Data"
                  delay="0.5s"
                />
              </div>
            </div>
          </section>

          {/* Results Section */}
          {hasSearched && (
            <section className="py-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Anime Results</h2>
                <div className="w-20 h-1 bg-accent rounded-full"></div>
              </div>
              
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="glass-card animate-pulse h-[450px]"></div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((anime) => (
                    <AnimeCard key={anime.id} anime={anime} />
                  ))}
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </PageLayout>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
  delay: string;
}

const FeatureItem = ({ icon, text, delay }: FeatureItemProps) => (
  <div 
    className="flex flex-col items-center gap-2 animate-fade-in" 
    style={{ animationDelay: delay }}
  >
    <div className="w-12 h-12 rounded-full flex items-center justify-center glass">
      {icon}
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

export default Home;
