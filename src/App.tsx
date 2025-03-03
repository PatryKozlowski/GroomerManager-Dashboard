import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "@/context/ThemeContext";
import IndexPage from "./pages/Index";
import { SidebarProvider } from "@/context/SidebarContext";

function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexPage />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
