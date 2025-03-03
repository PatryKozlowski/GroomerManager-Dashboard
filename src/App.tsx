import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/context/ThemeContext";
import { SidebarProvider } from "@/context/SidebarContext";
import { SalonProvider } from "@/context/SalonContext";
import { Toaster } from "@/components/ui/sonner";
import IndexPage from "./pages/Index";
import NotFound from "./pages/NotFound";
import Clients from "./pages/Clients";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <SalonProvider>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </SalonProvider>
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
