export const WHATSAPP_NUMBER = "22300000000";

export const CATEGORIES = [
  "Toutes",
  "Bazin",
  "Wax",
  "Costumes",
  "Tenues traditionnelles"
];

export const CREATIONS = [
  {
    id: "hbt-001",
    title: "Ensemble Bazin Riche",
    category: "Bazin",
    image: "https://images.unsplash.com/photo-1580481072545-9922919aa786?q=80&w=800&auto=format&fit=crop",
    description: "Un ensemble trois pièces en Bazin riche avec de fines broderies artisanales."
  },
  {
    id: "hbt-002",
    title: "Robe Wax Élégance",
    category: "Wax",
    image: "https://images.unsplash.com/photo-1549065608-f46399a9a087?q=80&w=800&auto=format&fit=crop",
    description: "Robe de soirée en tissu Wax aux motifs vibrants, coupe cintrée."
  },
  {
    id: "hbt-003",
    title: "Costume Sur-Mesure",
    category: "Costumes",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=800&auto=format&fit=crop",
    description: "Costume deux pièces pour homme, coupe moderne et tissu premium."
  },
  {
    id: "hbt-004",
    title: "Grand Boubou Traditionnel",
    category: "Tenues traditionnelles",
    image: "https://images.unsplash.com/photo-1623861214066-edec9a37eaf9?q=80&w=800&auto=format&fit=crop",
    description: "Grand boubou africain traditionnel, parfait pour les grandes occasions."
  },
  {
    id: "hbt-005",
    title: "Veste Wax Contemporaine",
    category: "Wax",
    image: "https://images.unsplash.com/photo-1574534720993-9c8e8d8d3f66?q=80&w=800&auto=format&fit=crop",
    description: "Veste légère pour homme avec des touches de Wax pour un style unique."
  },
  {
    id: "hbt-006",
    title: "Robe de mariée Traditionnelle",
    category: "Tenues traditionnelles",
    image: "https://images.unsplash.com/photo-1584988711467-fec5db701c90?q=80&w=800&auto=format&fit=crop",
    description: "Une création exceptionnelle pour un jour inoubliable, mêlant tradition et modernité."
  }
];

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
