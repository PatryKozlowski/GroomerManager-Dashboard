import ThemeToggle from "@/components/theme/ThemeToggle";
import { HamburgerMenu } from "@/components/buttons/HamburgerMenu";
import { X } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import SalonSelector from "../salon/SalonSelector";

function Navbar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  return (
    <header className="sticky top-0 z-10 border-b bg-background w-full p-4 h-[65px]">
      <div className="flex gap-2 justify-between">
        <div className="flex items-start">
          <SalonSelector />
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
