import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sinjeom from "./pages/Sinjeom";
import Saju from "./pages/Saju";
import Tarot from "./pages/Tarot";
import Counseling from "./pages/Counseling";
import AIServices from "./pages/AIServices";
import Community from "./pages/Community";
import Guide from "./pages/Guide";
import Partnership from "./pages/Partnership";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sinjeom" element={<Sinjeom />} />
          <Route path="/saju" element={<Saju />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/ai-services" element={<AIServices />} />
          <Route path="/community" element={<Community />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
