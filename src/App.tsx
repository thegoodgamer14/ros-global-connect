import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OilGas from "./pages/OilGas";
import HVAC from "./pages/HVAC";
import DataCenter from "./pages/DataCenter";
import Rhamnolipids from "./pages/Rhamnolipids";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/ui/navigation";
import Footer from "./components/ui/footer";
import ScrollToTop from "./components/ui/scroll-to-top";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oil-gas" element={<OilGas />} />
          <Route path="/hvac" element={<HVAC />} />
          <Route path="/datacenter" element={<DataCenter />} />
          <Route path="/rhamnolipids" element={<Rhamnolipids />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
