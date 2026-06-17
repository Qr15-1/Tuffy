import * as React from "react";
import { Navbar, HeroSection, FeaturesSection, ProcessSection, Footer, GalleryPage, ContactPage, Page } from "@/features/landing";

function App() {
  const [currentPage, setCurrentPage] = React.useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans relative overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'home' && (
        <>
          <HeroSection onNavigateToGallery={() => handleNavigate('gallery')} />
          <FeaturesSection />
          <ProcessSection />
        </>
      )}
      
      {currentPage === 'gallery' && <GalleryPage />}
      
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer />
    </main>
  );
}

export default App;
