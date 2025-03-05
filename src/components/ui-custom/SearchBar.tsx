
import { useState, FormEvent } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
  className?: string;
}

const SearchBar = ({ onSearch, isLoading = false, className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`search-bar ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find the best thriller drama or explain an anime plot..."
        className="bg-transparent w-full outline-none text-white placeholder:text-white/60"
        disabled={isLoading}
      />
      <button
        type="submit"
        className={`ml-2 p-2 rounded-full bg-accent text-white transition-all duration-200 ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/80"
        }`}
        disabled={isLoading}
      >
        <Search size={20} />
      </button>
    </form>
  );
};

export default SearchBar;
