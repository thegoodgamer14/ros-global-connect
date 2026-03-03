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

// Oil & Gas Product Line Pages
import OilGasElectrical from "./pages/oil-gas/OilGasElectrical";
import OilGasMechanical from "./pages/oil-gas/OilGasMechanical";
import OilGasInstrumentation from "./pages/oil-gas/OilGasInstrumentation";
import OilGasDrilling from "./pages/oil-gas/OilGasDrilling";

// HVAC Product Line Pages
import HVACDesiccantDehumidifiers from "./pages/hvac/HVACDesiccantDehumidifiers";
import HVACGasPhaseAirFiltration from "./pages/hvac/HVACGasPhaseAirFiltration";
import HVACCeldecCoolingPads from "./pages/hvac/HVACCeldecCoolingPads";
import HVACIndustrialGasFilters from "./pages/hvac/HVACIndustrialGasFilters";

// Data Center Product Line Pages
import DataCenterAirFiltration from "./pages/datacenter/DataCenterAirFiltration";
import DataCenterChemicalFiltration from "./pages/datacenter/DataCenterChemicalFiltration";
import DataCenterPrecisionCooling from "./pages/datacenter/DataCenterPrecisionCooling";
import DataCenterEnvironmentalControl from "./pages/datacenter/DataCenterEnvironmentalControl";

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

          {/* Oil & Gas Product Lines */}
          <Route path="/oil-gas/field-surface-facility-electrical" element={<OilGasElectrical />} />
          <Route path="/oil-gas/field-surface-facility-mechanical" element={<OilGasMechanical />} />
          <Route path="/oil-gas/field-surface-facility-instrumentation" element={<OilGasInstrumentation />} />
          <Route path="/oil-gas/drilling-rig-spaces-mud-pumps" element={<OilGasDrilling />} />

          {/* HVAC Product Lines */}
          <Route path="/hvac/desiccant-dehumidifiers" element={<HVACDesiccantDehumidifiers />} />
          <Route path="/hvac/gas-phase-air-filtration" element={<HVACGasPhaseAirFiltration />} />
          <Route path="/hvac/celdec-cooling-pads" element={<HVACCeldecCoolingPads />} />
          <Route path="/hvac/industrial-gas-filters" element={<HVACIndustrialGasFilters />} />

          {/* Data Center Product Lines */}
          <Route path="/datacenter/air-filtration-systems" element={<DataCenterAirFiltration />} />
          <Route path="/datacenter/chemical-filtration" element={<DataCenterChemicalFiltration />} />
          <Route path="/datacenter/precision-cooling" element={<DataCenterPrecisionCooling />} />
          <Route path="/datacenter/environmental-control" element={<DataCenterEnvironmentalControl />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
