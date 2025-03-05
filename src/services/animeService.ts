
import { SearchRequest, SearchResponse } from "../types/anime";

// For demo purposes, this is a mock implementation
// In a real app, this would connect to your Python backend
export const searchAnime = async (request: SearchRequest): Promise<SearchResponse> => {
  // This would be the actual API call to your backend
  // return fetch('/api/search', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(request)
  // }).then(res => res.json());
  
  // For demo, we'll simulate an API call with a delay
  console.log("Searching for:", request.query);
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Mock data
  const results = [
    {
      id: 1,
      title: "Death Note",
      title_english: "Death Note",
      title_japanese: "デスノート",
      image_url: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
      synopsis: "Light Yagami is a genius high school student who discovers a mysterious notebook: the \"Death Note\", which belongs to the Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its pages.",
      score: 8.63,
      episodes: 37,
      status: "Finished Airing",
      aired: "Oct 4, 2006 to Jun 27, 2007",
      genres: ["Mystery", "Psychological", "Supernatural", "Thriller"],
      rating: "R - 17+ (violence & profanity)",
      duration: "23 min. per ep.",
      studios: ["Madhouse"]
    },
    {
      id: 2,
      title: "Attack on Titan",
      title_english: "Attack on Titan",
      title_japanese: "進撃の巨人",
      image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
      synopsis: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure.",
      score: 8.53,
      episodes: 25,
      status: "Finished Airing",
      aired: "Apr 7, 2013 to Sep 29, 2013",
      genres: ["Action", "Drama", "Fantasy"],
      rating: "R - 17+ (violence & profanity)",
      duration: "24 min. per ep.",
      studios: ["Wit Studio"]
    },
    {
      id: 3,
      title: "Fullmetal Alchemist: Brotherhood",
      title_english: "Fullmetal Alchemist: Brotherhood",
      title_japanese: "鋼の錬金術師 FULLMETAL ALCHEMIST",
      image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      synopsis: "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life.",
      score: 9.11,
      episodes: 64,
      status: "Finished Airing",
      aired: "Apr 5, 2009 to Jul 4, 2010",
      genres: ["Action", "Adventure", "Drama", "Fantasy"],
      rating: "R - 17+ (violence & profanity)",
      duration: "24 min. per ep.",
      studios: ["Bones"]
    }
  ];
  
  return { results };
};
