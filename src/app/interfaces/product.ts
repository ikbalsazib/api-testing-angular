export interface Product {
  images: string[];
  _id: string;
  productName: string;
  productSlug: string;
  sku: string;
  price: number;
  discountType: number;
  discountAmount: number;
  quantity: number;
  soldQuantity: number;
  brand: string;
  category: string;
  subCategory: string;
  shortDescription: string;
  description: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
