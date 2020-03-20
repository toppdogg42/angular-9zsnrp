import { Injectable } from '@angular/core';

import {Data} from '../MockData';
import { Product } from '../Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products = Data;
  
 
  constructor(
  ) { } 
  getProduct(){

  }
  getProducts(){
    return this.products;
  }
  addProduct(product){
    let newObj = {id:4,...product};
this.products.push(newObj);
  }
  
}