
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { searchAnime } from "@/services/animeService";
import { Anime } from "@/types/anime";
import SearchBar from "@/components/ui-custom/SearchBar";
import SampleQueries from "@/components/ui-custom/SampleQueries";
import PageLayout from "@/components/layout/PageLayout";
import { Upload, Zap, Search } from "lucide-react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const response = await searchAnime({ query });
      
      if (response.results.length === 0) {
        toast.info("No results found for your query.");
      } else {
        // Navigate to results page with the search results and query
        navigate("/results", { 
          state: { 
            results: response.results,
            query: query
          } 
        });
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
          <section className="py-12 md:py-20 flex flex-col items-center text-center">
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
            </div>
          </section>
          
          {/* Features Section */}
          <section className="py-8 flex flex-col items-center justify-center">
            <div className="mt-6 grid grid-cols-3 gap-6 max-w-lg mx-auto">
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
          </section>
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
