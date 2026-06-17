import * as React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Page = 'home' | 'gallery' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogoClick = () => {
    onNavigate('home');
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('contact');
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Left: Hamburger menu */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 hover:bg-slate-100 md:hidden z-50 relative"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            <span className="sr-only">Menu</span>
          </Button>
 
          {/* Center: Logo */}
          <div 
            onClick={handleLogoClick}
            className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center cursor-pointer select-none z-50"
          >
            <span className="font-handwritten text-[#3b5edd] text-4xl md:text-5xl lowercase tracking-normal font-bold">
              tuffty
            </span>
          </div>
 
          {/* Right: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-widest">
            <a 
              href="#contacto" 
              onClick={handleContactClick}
              className={`hover:text-blue-600 transition-colors uppercase cursor-pointer ${
                currentPage === 'contact' ? 'text-[#f58220] font-bold' : 'text-slate-900'
              }`}
            >
              Contacto
            </a>
            <a 
              onClick={() => onNavigate('gallery')}
              className={`hover:text-blue-600 transition-colors uppercase cursor-pointer ${
                currentPage === 'gallery' ? 'text-[#f58220] font-bold' : 'text-slate-900'
              }`}
            >
              Galería
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white/98 backdrop-blur-lg z-40 flex flex-col justify-center items-center md:hidden">
          <div className="flex flex-col items-center gap-8 text-2xl font-black tracking-widest text-slate-800">
            <a 
              onClick={() => handleLinkClick('home')}
              className={`hover:text-[#f58220] transition-colors uppercase cursor-pointer ${
                currentPage === 'home' ? 'text-[#3b5edd]' : 'text-slate-400'
              }`}
            >
              Inicio
            </a>
            <a 
              onClick={() => handleLinkClick('contact')}
              className={`hover:text-[#f58220] transition-colors uppercase cursor-pointer ${
                currentPage === 'contact' ? 'text-[#f58220]' : 'text-slate-400'
              }`}
            >
              Contacto
            </a>
            <a 
              onClick={() => handleLinkClick('gallery')}
              className={`hover:text-[#f58220] transition-colors uppercase cursor-pointer ${
                currentPage === 'gallery' ? 'text-[#f58220]' : 'text-slate-400'
              }`}
            >
              Galería
            </a>
          </div>
        </div>
      )}
    </>
  );
}
