import { ProductType } from "./product-type";

export type CartStateType = {
    items: ProductType[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    totalQuantity: number;
}