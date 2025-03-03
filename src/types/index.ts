export interface Salon {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  description?: string;
  logo?: string;
  isDefault?: boolean;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes?: string; // Add notes field for clients
  createdAt: Date;
  pets: Pet[];
  salonId: string; // Add salonId to associate clients with salons
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  notes: string;
  clientId: string;
  photoUrl?: string;
  salonId: string; // Add salonId to associate pets with salons
}
