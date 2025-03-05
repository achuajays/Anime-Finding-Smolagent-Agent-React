
import { SearchRequest, SearchResponse } from "../types/anime";

export const searchAnime = async (request: SearchRequest): Promise<SearchResponse> => {
  try {
    console.log("Searching for:", request.query);
    
    const response = await fetch('https://anime-finding-smolagent-agent.onrender.com/agent', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({ query: request.query })
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform the API response to match our expected format
    // The API returns {response: string} but we need {results: Anime[]}
    return {
      results: [{
        id: 1,
        title: data.response.split("is a")[0].trim() || "Anime Result",
        image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg", // Default placeholder
        synopsis: data.response,
        genres: ["Comedy", "Action", "Adventure"],
      }]
    };
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};
