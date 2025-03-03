import { cn } from "@/lib/utils";
import {
  BarChart,
  Calendar,
  PawPrint,
  Scissors,
  Tag,
  UserCircle,
  Users,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const ROUTES = {
  "/": "Dashboard",
  "/clients": "Clients",
  "/pets": "Pets",
  "/appointments": "Appointments",
  "/services": "Services",
  "/staff": "Staff",
  "/inventory": "Inventory",
  "/settings": "Settings",
} as const;

const NAV_ITEMS = [
  { path: "/", label: "Dashboard", icon: <BarChart className="h-5 w-5" /> },
  {
    path: "/appointments",
    label: "Appointments",
    icon: <Calendar className="h-5 w-5" />,
  },
  { path: "/clients", label: "Clients", icon: <Users className="h-5 w-5" /> },
  { path: "/pets", label: "Pets", icon: <PawPrint className="h-5 w-5" /> },
  {
    path: "/services",
    label: "Services",
    icon: <Scissors className="h-5 w-5" />,
  },
  { path: "/staff", label: "Staff", icon: <UserCircle className="h-5 w-5" /> },
  { path: "/inventory", label: "Inventory", icon: <Tag className="h-5 w-5" /> },
];

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({ icon, label, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center w-full p-3 my-1 text-sm transition-all duration-200 rounded-lg",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      <div className="flex items-center justify-center w-5 h-5 mr-3">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  );
}

function Sidebar() {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const location = useLocation();
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(
    ROUTES[location.pathname as keyof typeof ROUTES] || "Dashboard"
  );

  useEffect(() => {
    setActiveItem(
      ROUTES[location.pathname as keyof typeof ROUTES] || "Dashboard"
    );
  }, [location.pathname]);

  const handleItemClick = (path: string) => {
    setActiveItem(ROUTES[path as keyof typeof ROUTES]);
    setIsCollapsed(false);
    navigate(path);
  };

  return (
    <div className="relative">
      <aside
        className={cn(
          "fixed z-50 flex flex-col h-full transition-all duration-300 ease-in-out shadow-lg bg-background border-r lg:relative lg:z-auto",
          isCollapsed ? "w-full" : "w-0 lg:w-64"
        )}
      >
        <div className="flex-1 overflow-y-auto lg:p-2">
          <div className="py-1">
            {NAV_ITEMS.map(({ path, label, icon }) => (
              <SidebarItem
                key={path}
                icon={icon}
                label={label}
                active={activeItem === label}
                onClick={() => handleItemClick(path)}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
