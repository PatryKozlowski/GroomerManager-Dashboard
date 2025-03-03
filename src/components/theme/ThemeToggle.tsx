import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className=""
          >
            {theme === "light" ? (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Zmień motyw</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Zmień motyw na {theme === "light" ? "ciemny" : "jasny"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default ThemeToggle;
