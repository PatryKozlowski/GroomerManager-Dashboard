import { Pet } from "@/types";

// Mock Pets
export const pets: Pet[] = [
  {
    id: "1",
    name: "Max",
    type: "Dog",
    breed: "Golden Retriever",
    age: 3,
    notes: "Friendly and energetic",
    clientId: "1",
    photoUrl:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=262&auto=format&fit=crop",
    salonId: "1",
  },
  {
    id: "2",
    name: "Bella",
    type: "Dog",
    breed: "Beagle",
    age: 2,
    notes: "Shy with strangers",
    clientId: "1",
    photoUrl:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=262&auto=format&fit=crop",
    salonId: "1",
  },
  {
    id: "3",
    name: "Oliver",
    type: "Cat",
    breed: "Siamese",
    age: 4,
    notes: "Does not like water",
    clientId: "2",
    photoUrl:
      "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=262&auto=format&fit=crop",
    salonId: "1",
  },
  {
    id: "4",
    name: "Charlie",
    type: "Dog",
    breed: "Poodle",
    age: 5,
    notes: "Regular customer",
    clientId: "3",
    photoUrl:
      "https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=262&auto=format&fit=crop",
    salonId: "2",
  },
  {
    id: "5",
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    age: 2,
    notes: "Needs gentle handling",
    clientId: "4",
    photoUrl:
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=262&auto=format&fit=crop",
    salonId: "2",
  },
  {
    id: "6",
    name: "Cooper",
    type: "Dog",
    breed: "Labrador",
    age: 1,
    notes: "First time customer",
    clientId: "5",
    photoUrl:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=262&auto=format&fit=crop",
    salonId: "3",
  },
];

// Function to get pets for a specific salon
export const getPets = (salonId?: string): Pet[] => {
  return pets.filter((pet) => !salonId || pet.salonId === salonId);
};
