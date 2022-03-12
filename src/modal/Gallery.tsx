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
   