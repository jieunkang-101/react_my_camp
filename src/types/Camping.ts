export interface Camping {
  id: string;
  name: string;
  theme: string;
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

export interface Campings {
  [id: string]: Camping;
}

export interface CardProps {
  card: Camping;
}

export interface EditorProps {
  cards: Campings;
  addCard: (card: Camping) => void;
  updateCard: (card: Camping) => void;
  deleteCard: (card: Camping) => void;
}

export interface PreviewProps {
  cards: Campings;
}
export interface CardAddFormProps {
  onAdd: (card: Camping) => void;
}

export interface CardEditFormProps {
  card: Camping;
  updateCard: (card: Camping) => void;
  deleteCard: (card: Camping) => void;
}
