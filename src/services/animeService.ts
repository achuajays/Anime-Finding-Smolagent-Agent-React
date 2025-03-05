
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
    
    // Simplified response with just the text
    return {
      results: [{
        id: 1,
        title: "Anime Result",
        image_url: "", // Empty as we don't need it
        synopsis: data.response,
        genres: [],
      }]
    };
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};
