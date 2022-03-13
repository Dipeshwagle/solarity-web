export type GalleryItem = {
  title: string;
  decentraland: boolean;
  imageUrl: string;
  currentBid: number;
  endingIn: string;
  tag?: "New" | "Hot";
};

export type GalleryRow = {
  title: string;
  items: GalleryItem[];
};

export type Gallery = {
  rows: GalleryRow[];
};

export type GalleryItemLand = {
  title: string;
  date: string;
  imageUrl: string;
  likes: number;
  invites: number;
};

export type GalleryRowLand = {
  title: string;
  items: GalleryItemLand[];
};

export type GalleryLand = {
  rows: GalleryRowLand[];
};
