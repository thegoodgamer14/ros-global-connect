import { Linkedin, Facebook } from "lucide-react";

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
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
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
  );
};

export default SocialMediaSidebar;