import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/context/SidebarContext";
import { cn } from "@/lib/utils";

export function HamburgerMenu() {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={() => setIsCollapsed(true)}
            size="icon"
            className={cn("bg-primary lg:hidden", isCollapsed && "hidden")}
          >
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Otwórz menu</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Otwórz menu</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
