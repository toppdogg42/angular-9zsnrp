import { Injectable } from "@angular/core";

import { Data } from "../MockData";
import { Product } from "../Product";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  products = Data;

  constructor() {}
  getProduct(id) {
    return this.products.find(product => product.id ==id);
  }
  getProducts() {
    return this.products;
  }
  addProduct(product) {
    let newObj = { id: 4, ...product };
    this.products.push(newObj);
  }
  removeProduct(id) {
    return this.products = this.products.filter(product => product.id != id);
  }
  updateProduct(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
}
