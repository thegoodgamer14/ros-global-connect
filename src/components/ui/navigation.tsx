import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import rosLogo from "@/assets/ros-global-logo.png";

interface SubItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/oil-gas",
    label: "Oil & Gas",
    children: [
      { href: "/oil-gas/field-surface-facility-electrical", label: "Field Surface Facility: Electrical" },
      { href: "/oil-gas/field-surface-facility-mechanical", label: "Field Surface Facility: Mechanical" },
      { href: "/oil-gas/field-surface-facility-instrumentation", label: "Field Surface Facility: Instrumentation" },
      { href: "/oil-gas/drilling-rig-spaces-mud-pumps", label: "Drilling: Mud Pumps" },
    ],
  },
  {
    href: "/hvac",
    label: "HVAC",
    children: [
      { href: "/hvac/desiccant-dehumidifiers", label: "Desiccant Dehumidifiers" },
      { href: "/hvac/gas-phase-air-filtration", label: "Gas-Phase Air Filtration" },
      { href: "/hvac/celdec-cooling-pads", label: "Celdec Cooling Pads" },
      { href: "/hvac/industrial-gas-filters", label: "Industrial Gas Filters" },
    ],
  },
  {
    href: "/datacenter",
    label: "Data Center",
    children: [
      { href: "/datacenter/air-filtration-systems", label: "Air Filtration" },
      { href: "/datacenter/chemical-filtration", label: "Chemical Filtration" },
      { href: "/datacenter/precision-cooling", label: "Precision Cooling" },
      { href: "/datacenter/environmental-control", label: "Environmental Control" },
    ],
  },
  { href: "/rhamnolipids", label: "Rhamnolipids" },
];

/* ───── Desktop dropdown ───── */
const DesktopDropdown = ({ item, isActive }: { item: NavItem; isActive: boolean }) => {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const ref = useRef<HTMLDivElement>(null);

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  useEffect(() => () => clearTimeout(timeout.current), []);

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        to={item.href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary flex items-center gap-1",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")} />
      </Link>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 min-w-[220px]">
          <div className="bg-background border border-border rounded-lg shadow-lg py-2">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                to={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ───── Mobile accordion ───── */
const MobileAccordion = ({
  item,
  isActive,
  onNavigate,
}: {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={item.href}
          onClick={onNavigate}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
            isActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="p-1 rounded hover:bg-accent"
          aria-label={`Expand ${item.label}`}
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} />
        </button>
      </div>

      {open && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-corporate-blue/20 pl-3">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              onClick={onNavigate}
              className="block text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

/* ───── Navigation ───── */
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isItemActive = (item: NavItem) =>
    location.pathname === item.href ||
    (item.children?.some((c) => location.pathname === c.href) ?? false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={rosLogo} alt="ROS Global Solutions" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.href} item={item} isActive={isItemActive(item)} />
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link to="/contact">
              <Button variant="default" size="sm">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) =>
                item.children ? (
                  <MobileAccordion
                    key={item.href}
                    item={item}
                    isActive={isItemActive(item)}
                    onNavigate={() => setIsOpen(false)}
                  />
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary px-2 py-1",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="sm" className="w-fit">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;