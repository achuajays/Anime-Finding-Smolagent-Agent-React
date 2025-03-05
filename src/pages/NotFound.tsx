
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="container mx-auto px-6 py-20 min-h-[70vh] flex items-center justify-center">
        <div className="glass-card p-12 text-center max-w-lg mx-auto">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-slate-300 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link 
            to="/" 
            className="btn-shine inline-flex items-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
