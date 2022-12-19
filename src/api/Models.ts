export interface OrderFood {
    id?: number,
    quantity: number,
    product: Product;
    delivery: Delivery;
}
export interface Delivery {
    id?: number,
    date: Date;
    warehouse: string;
    destination: string;
    van?: Van;
}
export interface Van {
    id?: number,
    brand: string;
    model: string;
    capacity: number;
}
export interface Product {
    id?: number,
    name: string;
    price: number;
    weight: number;


}