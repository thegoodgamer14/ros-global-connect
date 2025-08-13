import { useState } from "react";
import { Linkedin, Facebook, Share2 } from "lucide-react";

export interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
  color: string;
}

interface SocialMediaSidebarProps {
  links?: SocialLink[];
}

const defaultSocialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/ros-global",
    label: "LinkedIn",
    color: "bg-[#0077b5] hover:bg-[#005885]"
  },
  {
    icon: Facebook,
    href: "https://facebook.com/rosglobal",
    label: "Facebook", 
    color: "bg-[#1877f2] hover:bg-[#166fe5]"
  }
];

const SocialMediaSidebar = ({ links = defaultSocialLinks }: SocialMediaSidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop Version - Fixed Sidebar */}
      <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
        {links.map((link, index) => {
          const IconComponent = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${link.color}`}
            >
              <IconComponent className="h-6 w-6" />
            </a>
          );
        })}
      </div>

      {/* Mobile Version - Collapsible Floating Button */}
      <div className="md:hidden fixed bottom-6 right-4 z-50">
        <div className="relative">
          {/* Social Media Icons - Animated */}
          <div className={`absolute bottom-16 right-0 flex flex-col-reverse gap-3 transition-all duration-300 ${
            isExpanded 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 ${link.color}`}
                  style={{ 
                    animationDelay: isExpanded ? `${index * 100}ms` : '0ms',
                    transform: isExpanded ? 'scale(1)' : 'scale(0.8)',
                    transition: `all 300ms ease-out ${isExpanded ? index * 50 : 0}ms`
                  }}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Main Toggle Button */}
          <button
            onClick={toggleExpanded}
            aria-label={isExpanded ? "Close social media" : "Open social media"}
            className={`w-14 h-14 rounded-full bg-corporate-blue hover:bg-corporate-blue-light flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
              isExpanded ? 'rotate-45 scale-110' : 'rotate-0 scale-100'
            }`}
          >
            <Share2 className="h-7 w-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialMediaSidebar;