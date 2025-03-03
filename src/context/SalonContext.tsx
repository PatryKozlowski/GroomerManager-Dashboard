import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Salon } from "@/types";
import { getDefaultSalon, salons } from "@/data/salons";
import { useLocation, useNavigate } from "react-router";

interface SalonContextType {
  currentSalon: Salon;
  allSalons: Salon[];
  changeSalon: (salonId: string) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

export function SalonProvider({ children }: { children: React.ReactNode }) {
  const [currentSalon, setCurrentSalon] = useState<Salon>(getDefaultSalon());
  const navigate = useNavigate();
  const location = useLocation();

  const changeSalon = (salonId: string) => {
    const salon = salons.find((s) => s.id === salonId);
    if (salon) {
      setCurrentSalon(salon);
      toast(`Salon zmieniony na: ${salon.name}`);
      navigate(`?salon=${salonId}`);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const salonId = params.get("salon");
    if (salonId) {
      const salon = salons.find((s) => s.id === salonId);
      if (salon) {
        setCurrentSalon(salon);
      }
    } else {
      setCurrentSalon(getDefaultSalon());
      navigate(`?salon=${getDefaultSalon().id}`);
    }
  }, [location.search]);

  return (
    <SalonContext.Provider
      value={{
        currentSalon,
        allSalons: salons,
        changeSalon,
      }}
    >
      {children}
    </SalonContext.Provider>
  );
}

export const useSalon = (): SalonContextType => {
  const context = useContext(SalonContext);
  if (context === undefined) {
    throw new Error("useSalon must be used within a SalonProvider");
  }
  return context;
};
