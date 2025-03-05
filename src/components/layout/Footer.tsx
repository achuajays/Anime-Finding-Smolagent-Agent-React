
import { Link } from "react-router-dom";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold inline-flex items-center gap-2">
              <span className="text-accent">Anime</span>Quest
            </Link>
            <p className="mt-4 text-sm text-slate-300 max-w-md">
              AnimeQuest is your AI-powered anime companion, helping you discover new series
              and get detailed information about your favorite anime shows.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink icon={<Github size={20} />} href="https://github.com" />
              <SocialLink icon={<Twitter size={20} />} href="https://twitter.com" />
              <SocialLink icon={<Mail size={20} />} href="mailto:contact@animequest.com" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} AnimeQuest. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 mt-2 sm:mt-0">
            Made with ❤️ for anime fans
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200"
  >
    {icon}
  </a>
);

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink = ({ to, children }: FooterLinkProps) => (
  <li>
    <Link 
      to={to} 
      className="text-slate-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
