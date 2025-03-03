import type { Client } from "@/types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ClientCardProps {
  client: Client;
  onViewDetails: (id: string) => void;
}

function ClientCard({ client, onViewDetails }: ClientCardProps) {
  const { name, email, phone, pets } = client;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase();
  };
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-primary/10 text-primary">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1 flex-1 min-w-0">
            <h3 className="font-medium text-base leading-none truncate">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground truncate">{email}</p>
            <p className="text-sm truncate">{phone}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Zwierzęta</span>
            {pets.length > 0 && (
              <span className="text-xs text-muted-foreground">
                {pets.length}
              </span>
            )}
          </div>

          {pets.length > 0 ? (
            <div className="flex -space-x-2 overflow-hidden">
              {pets.map((pet) => (
                <Avatar
                  key={pet.id}
                  className="h-8 w-8 border-2 border-background"
                >
                  <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                    {pet.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ))}
              {pets.length > 4 && (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-xs font-medium border-2 border-background">
                  +{pets.length - 4}
                </div>
              )}
            </div>
          ) : (
            <Badge variant="outline" className="text-xs bg-secondary/50">
              Brak zwierząt
            </Badge>
          )}
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onViewDetails(client.id)}
            className="gap-1"
          >
            <Eye className="h-4 w-4" />
            Pokaż klineta
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ClientCard;
