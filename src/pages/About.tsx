
import PageLayout from "@/components/layout/PageLayout";
import StatCard from "@/components/ui-custom/StatCard";
import { Server, Code, Database, Bot, Users, Award, Search, Mail } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">About AnimeQuest</h1>
            <p className="text-lg text-slate-300 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Discover the technology and vision behind our AI-powered anime search platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <StatCard 
              value="5000+" 
              label="Anime Titles" 
              icon={<Database className="w-5 h-5" />}
              className="floating-card"
            />
            <StatCard 
              value="10K+" 
              label="Daily Searches" 
              icon={<Search className="w-5 h-5" />}
              className="floating-card"
              style={{ animationDelay: "0.2s" }}
            />
            <StatCard 
              value="95%" 
              label="Search Accuracy" 
              icon={<Award className="w-5 h-5" />}
              className="floating-card"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16">
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-300 mb-8">
              AnimeQuest was created with a simple mission: to help anime enthusiasts discover 
              new content that perfectly matches their preferences. By combining cutting-edge AI 
              technology with comprehensive anime data, we've built a platform that understands 
              natural language queries and delivers personalized recommendations.
            </p>
            
            <h2 className="text-3xl font-bold mb-6 mt-12">The Technology Behind AnimeQuest</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <TechCard 
                icon={<Bot size={24} />}
                title="AI-Powered Search"
                description="Our backend uses advanced natural language processing to understand complex search queries and find the most relevant anime matches."
              />
              
              <TechCard 
                icon={<Database size={24} />}
                title="Comprehensive Database"
                description="We maintain an up-to-date database of anime titles, complete with detailed information, ratings, and genre classifications."
              />
              
              <TechCard 
                icon={<Code size={24} />}
                title="Modern Web Architecture"
                description="Built with React and TypeScript, our frontend provides a smooth, responsive user experience across all devices."
              />
              
              <TechCard 
                icon={<Server size={24} />}
                title="Powerful Backend"
                description="Python-based backend with smolagents handles complex queries efficiently and communicates with external APIs to fetch the latest anime data."
              />
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              AnimeQuest is brought to you by a team of passionate anime fans and skilled developers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Alex Johnson"
              role="Founder & Lead Developer"
              description="Alex created AnimeQuest out of a passion for anime and AI technology. With over 10 years of software development experience, he leads our technical vision."
            />
            
            <TeamMember 
              name="Sasha Kim"
              role="AI Engineer"
              description="Sasha specializes in natural language processing and is responsible for the intelligent search algorithms that power AnimeQuest's recommendations."
            />
            
            <TeamMember 
              name="Maya Patel"
              role="Frontend Developer"
              description="Maya crafts the beautiful, intuitive user interfaces that make AnimeQuest a pleasure to use. She's constantly improving the user experience."
            />
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16">
          <div className="glass-card p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-slate-300 mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            
            <a href="mailto:contact@animequest.com" className="btn-shine inline-flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-slate-400">
                AnimeQuest is constantly evolving. Join our community to stay updated on new features and improvements.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard = ({ icon, title, description }: TechCardProps) => (
  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
    <div className="bg-accent/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
}

const TeamMember = ({ name, role, description }: TeamMemberProps) => (
  <div className="glass-card p-6 text-center">
    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
      <Users className="w-8 h-8 text-accent" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-accent text-sm mb-4">{role}</p>
    <p className="text-slate-300 text-sm">{description}</p>
  </div>
);

export default About;
