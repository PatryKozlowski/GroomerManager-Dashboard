import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, ChevronDown } from "lucide-react";
import { useSalon } from "@/context/SalonContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function SalonSelector() {
  const { currentSalon, allSalons, changeSalon } = useSalon();
  return (
    <div className="mr-3">
      {allSalons.length > 1 ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="flex justify-between items-center gap-2"
            >
              <div className="flex items-center gap-2 truncate">
                {currentSalon.logo ? (
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={currentSalon.logo}
                      alt={currentSalon.name}
                    />
                    <AvatarFallback>
                      <Home className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <Home className="h-4 w-4" />
                )}
                <span className="truncate">{currentSalon.name}</span>
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            {allSalons.map((salon) => (
              <DropdownMenuItem
                key={salon.id}
                className={`flex items-center gap-2 ${
                  salon.id === currentSalon.id ? "bg-primary/10" : ""
                }`}
                onClick={() => changeSalon(salon.id)}
              >
                {salon.logo ? (
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={salon.logo} alt={salon.name} />
                    <AvatarFallback>
                      <Home className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <Home className="h-4 w-4" />
                )}
                <span className="truncate">{salon.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex items-center h-full">
          <div className="mr-2 p-1 flex-shrink-0">
            {/* <PawPrint className="h-4 w-4 text-primary-foreground" /> */}
            <Avatar className="h-6 w-6">
              <AvatarImage src={currentSalon.logo} alt={currentSalon.name} />
              <AvatarFallback>
                <Home className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
          </div>
          <h2 className="whitespace-nowrap">{currentSalon.name}</h2>
        </div>
      )}
    </div>
  );
}

export default SalonSelector;
