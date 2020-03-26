import { Component, OnInit } from "@angular/core";
import { Data } from "../MockData";
import { Product } from "../Product";
import { ProductService } from "../service/product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.getProduct();
  }
getProduct(){
  this.productService.getProducts().subscribe(data =>{this.products = data})
}
  selected: Product;
  showDetail(product) {
    this.selected = product;
  }
  
}
