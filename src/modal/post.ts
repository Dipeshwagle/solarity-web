
export type PostType = 'featured' | 'announcement' | 'normal'

export type TagType = 'secondary' | 'error' | 'info' | 'warning'

export type Tag = {
  title: string
  type: TagType
}
export type  Post = {
  title: string;
  subtitle?: string;
  tags?: Tag[];
  likes: number;
  type: PostType;
  progress?:number;
  vr?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
};
