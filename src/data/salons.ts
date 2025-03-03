import { Salon } from "@/types";

// Mock Salons
export const salons: Salon[] = [
  {
    id: "1",
    name: "Pawsome Grooming",
    address: "123 Main St, Anytown, USA",
    phone: "(555) 123-4567",
    email: "info@pawsomegrooming.com",
    description: "Premium pet grooming services in downtown",
    logo: "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=300&auto=format&fit=crop",
    isDefault: true,
  },
  {
    id: "2",
    name: "Furry Friends Salon",
    address: "456 Oak Ave, Othertown, USA",
    phone: "(555) 987-6543",
    email: "hello@furryfriends.com",
    description: "Specialized in small breeds and cats",
    logo: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=300&auto=format&fit=crop",
    isDefault: false,
  },
  {
    id: "3",
    name: "Luxury Paws",
    address: "789 Pine Rd, Somewhere, USA",
    phone: "(555) 456-7890",
    email: "care@luxurypaws.com",
    description: "Luxury grooming services for discerning pet owners",
    logo: "https://images.unsplash.com/photo-1607923432780-7a9c30adcb72?q=80&w=300&auto=format&fit=crop",
    isDefault: false,
  },
];

// Function to get salon details by ID
export const getSalonById = (id: string): Salon | undefined => {
  return salons.find((salon) => salon.id === id);
};

// Function to get the default salon
export const getDefaultSalon = (): Salon => {
  return salons.find((salon) => salon.isDefault) || salons[0];
};
