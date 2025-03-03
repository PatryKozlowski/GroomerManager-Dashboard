import { Client } from "@/types";
import { pets } from "./pets";

// Mock Clients
export const clients: Client[] = [
  {
    id: "1",
    name: "Anna Smith",
    email: "anna.smith@example.com",
    phone: "(555) 123-4567",
    createdAt: new Date("2023-01-15"),
    pets: [],
    salonId: "1",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 987-6543",
    createdAt: new Date("2023-02-20"),
    pets: [],
    salonId: "1",
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "(555) 456-7890",
    createdAt: new Date("2023-03-10"),
    pets: [],
    salonId: "2",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "(555) 234-5678",
    createdAt: new Date("2023-04-05"),
    pets: [],
    salonId: "2",
  },
  {
    id: "5",
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    phone: "(555) 876-5432",
    createdAt: new Date("2023-05-18"),
    pets: [],
    salonId: "3",
  },
];

export const linkClientsToPets = () => {
  clients.forEach((client) => {
    client.pets = pets.filter((pet) => pet.clientId === client.id);
  });
};

// Function to get clients for a specific salon
export const getClients = (salonId?: string): Client[] => {
  console.log("Getting clients for salon:", salonId);
  return clients.filter((client) => !salonId || client.salonId === salonId);
};

// Function to get recent clients
export const getRecentClients = (
  count: number = 5,
  salonId?: string
): Client[] => {
  return [...clients]
    .filter((client) => !salonId || client.salonId === salonId)
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    .slice(0, count);
};
