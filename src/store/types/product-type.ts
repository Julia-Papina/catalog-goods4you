export type ProductType = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    quantity: number;
    availabilityStatus: string;
    total: number;
    discountPercentage: number;
    discountTotal: number;
    description: string;
    warrantyInformation: string;
    shippingInformation: string;
    rating: number;
    category: string;
    images: string[];
    tags: string[];
}