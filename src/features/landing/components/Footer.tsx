import * as React from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.01c1.306-.022 2.613-.005 3.914-.014.12 1.344.757 2.585 1.705 3.506.963.896 2.228 1.417 3.528 1.488v3.987a11.233 11.233 0 01-3.693-.974c-.87-.414-1.636-.994-2.261-1.722a8.552 8.552 0 01-.12 3.863c-.563 2.115-1.921 3.93-3.793 5.064A8.835 8.835 0 017.07 16.51c-2.316-.395-4.354-1.89-5.388-4.047a8.914 8.914 0 01.378-7.986c1.237-2.072 3.493-3.393 5.88-3.486 1.455-.03 2.9.362 4.103 1.157.653.43 1.22.983 1.674 1.626.068-1.282.022-2.57.04-3.856.002-.63.023-1.258.067-1.898V.01zm-3.46 8.3c-.943.08-1.8.623-2.25 1.465-.452.844-.45 1.875-.018 2.715.42.822 1.24 1.377 2.152 1.472.935.1 1.85-.246 2.404-.99.553-.742.668-1.722.316-2.58a2.53 2.53 0 00-2.6-1.583z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#e5e5e5] text-slate-800 py-12 px-6">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* Fila Superior */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Logo y Tagline */}
          <div className="text-center sm:text-left">
            <span className="font-handwritten text-[#3b5edd] text-4xl select-none lowercase tracking-normal font-bold block mb-1">
              tuffty
            </span>
            <span className="text-slate-500 text-sm font-medium">
              Alfombras personalizadas
            </span>
          </div>

          {/* Redes Sociales */}
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-sm font-semibold tracking-wider">
              Síguenos
            </span>
            
            {/* Caja Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#ec4899] text-white w-9 h-9 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>

            {/* Caja TikTok */}
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#f58220] text-white w-9 h-9 rounded-lg flex items-center justify-center transition-transform hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Fila Inferior: Copyright */}
        <div className="border-t border-slate-300 pt-6 text-center">
          <p className="text-slate-500 text-xs font-semibold tracking-widest">
            Klee &copy; 2026
          </p>
        </div>

      </div>
    </footer>
  );
}
