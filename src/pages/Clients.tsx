import ClientCard from "@/components/client/ClientCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clients } from "@/data/clients";
import DashboardLayouts from "@/layouts/DashboardLayouts";
import { Filter, Plus, RefreshCw, Search, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function ClientsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const isLoading = false;
  const navigate = useNavigate();

  function handleViewDetails(clientId: string) {
    navigate(`/clients/${clientId}`);
  }

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery)
  );

  return (
    <DashboardLayouts>
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Klienci</h1>
          <p className="text-muted-foreground">
            Zarządzaj informacjami o swoich klientach i ich zwierzętach
          </p>
        </div>

        <Button className="md:w-auto gap-2">
          <UserPlus className="h-4 w-4" />
          <span>Dodaj klienta</span>
        </Button>
      </div>

      {/* Filters and search */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search clients..."
            className="w-full pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" title="Filter clients">
            <Filter className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            title="Refresh client list"
            // onClick={handleRefresh}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Client count */}
      <div className="flex items-center text-sm text-muted-foreground">
        <span>{clients.length} klientów</span>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="mt-4 text-muted-foreground">Pobieranie klientów</p>
        </div>
      ) : /* Clients grid/list */
      filteredClients.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <ClientCard
              key={client.id}
              client={client}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 text-center border rounded-lg">
          <UserPlus className="h-12 w-12 text-muted-foreground mb-3" />
          <h3 className="font-medium text-lg">Oops pusto tutaj...</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            {searchQuery
              ? "Sprónuj zmienić kryteria wyszukiwania"
              : "Dodaj nowego klienta"}
          </p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            <span>Dodaj klienta</span>
          </Button>
        </div>
      )}
    </DashboardLayouts>
  );
}

export default ClientsPage;
