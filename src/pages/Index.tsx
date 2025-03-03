import { Button } from "@/components/ui/button";
import DashboardLayouts from "@/layouts/DashboardLayouts";
import { UserPlus, Plus } from "lucide-react";

function IndexPage() {
  return (
    <DashboardLayouts>
      {/* Welcome message and quick actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Good afternoon</h2>
          <p className="text-muted-foreground">
            Here's what's happening today at Pies Na Glanc.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Button className="sm:w-auto justify-start sm:justify-center gap-2">
            <Plus className="h-4 w-4" />
            <span>New Appointment</span>
          </Button>
          <Button
            variant="outline"
            className="sm:w-auto justify-start sm:justify-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            <span>New Client</span>
          </Button>
        </div>
      </div>
    </DashboardLayouts>
  );
}

export default IndexPage;
