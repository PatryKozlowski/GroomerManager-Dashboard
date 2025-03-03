import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router";
interface DashboardLayoutsProps {
  children: React.ReactNode;
}

const DashboardLayouts = ({ children }: DashboardLayoutsProps) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-7xl space-y-6">
            {children || <Outlet />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayouts;
