import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lineup from "@/components/Lineup";
import VIPSection from "@/components/VIPSection";
import Gallery from "@/components/Gallery";
import EntryRequirements from "@/components/EntryRequirements";
import MediaKit from "@/components/MediaKit";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster position="top-center" expand={true} richColors />
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <Lineup />
            <VIPSection />
            <Gallery />
            <EntryRequirements />
            <MediaKit />
          </main>
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
