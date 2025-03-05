
interface SampleQueriesProps {
  onSelect: (query: string) => void;
}

const SampleQueries = ({ onSelect }: SampleQueriesProps) => {
  const queries = [
    "Find me the best psychological thrillers",
    "What are the top-rated romance anime?",
    "Show me anime similar to Attack on Titan",
    "Recommend a good anime for beginners",
    "What are the most popular anime this season?",
    "Find anime with strong female protagonists"
  ];

  return (
    <div className="mt-8">
      <h3 className="text-center text-sm font-medium text-slate-300 mb-3">Try these sample queries</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {queries.map((query, index) => (
          <button
            key={index}
            onClick={() => onSelect(query)}
            className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm hover:bg-white/20 transition-colors duration-200"
          >
            {query}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SampleQueries;
