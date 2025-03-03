import ThemeToggle from "@/components/theme/ThemeToggle";
import { HamburgerMenu } from "@/components/buttons/HamburgerMenu";
import { PawPrint, X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  return (
    <header className="sticky top-0 z-10 border-b bg-background w-full p-4 h-[65px]">
      <div className="flex gap-2 justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-full mr-2">
            <div className="mr-2 p-1 bg-primary rounded-md flex-shrink-0">
              <PawPrint className="h-4 w-4 text-primary-foreground" />
            </div>
            <h2 className="whitespace-nowrap">Groomer Manager</h2>
          </div>
          <HamburgerMenu />
          <Button
            onClick={() => setIsCollapsed(false)}
            className={cn("lg:hidden p-1 rounded-md", !isCollapsed && "hidden")}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;
