export interface Root {
  totalResults: number;
  product: Product[];
}

export interface Product {
  id: number;
  categoryId: number;
  title: string;
  image: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
