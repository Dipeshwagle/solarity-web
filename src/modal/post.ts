
export type PostType = 'featured' | 'announcement' | 'normal'

export type Tag = {
  title: string
  type: 'secondary' | 'error' | 'info' | 'warning'
}
export type  Post = {
  title: string;
  subtitle?: string;
  tags?: Tag[];
  likes: number;
  type: PostType;
  vr?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
};
