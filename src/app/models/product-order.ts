import {Product} from "./product";

export class ProductOrder {
    product: Product;
    name: string;
    quantity: number;
    price: number

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}