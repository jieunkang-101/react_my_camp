export interface Camping {
  id: string;
  theme: string;
  name: string;
  location: string;
  websiteURL: string;
  site: string;
  checkIn: string;
  checkOut: string;
  activities: string;
  placeVisited: string;
  fileName: string;
  fileURL: string | null;
}

export interface CardProps {
  card: Camping;
}

export interface CardsProps {
  cards: Camping[];
}
