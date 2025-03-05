
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3 bg-black/80 backdrop-blur-lg" : "py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-accent">Anime</span>Quest
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks activeRoute={location.pathname} />
          
          <div className="flex items-center gap-3">
            <button className="nav-link">
              <Search size={20} />
            </button>
            <button className="btn-shine">
              <User size={18} className="mr-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-white/10" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 animate-fade-in">
          <NavLinks activeRoute={location.pathname} mobile />
          
          <div className="flex flex-col items-center gap-4">
            <button className="btn-shine w-40">
              <User size={18} className="mr-2" />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  activeRoute: string;
  mobile?: boolean;
}

const NavLinks = ({ activeRoute, mobile = false }: NavLinksProps) => {
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
  ];
  
  return (
    <div className={cn(
      "flex gap-4",
      mobile ? "flex-col items-center text-xl" : "items-center"
    )}>
      {links.map(link => (
        <Link
          key={link.path}
          to={link.path}
          className={cn(
            "nav-link",
            activeRoute === link.path && "active-nav-link",
            mobile && "text-xl py-3"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
