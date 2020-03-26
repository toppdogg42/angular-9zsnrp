import { Injectable } from "@angular/core";

import { Data } from "../MockData";
import { Product } from "../Product";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class ProductService {
  // products = Data;
  api= 'https://5e7af63b0e04630016332707.mockapi.io/product'
  constructor(
    private http:HttpClient
  ) {}

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
  }
  
  // addProduct(product) {
  //   let newObj = { id: 4, ...product };
  //   this.products.push(newObj);
  // }
  // removeProduct(id) {
  //   return this.products = this.products.filter(product => product.id != id);
  // }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
}
