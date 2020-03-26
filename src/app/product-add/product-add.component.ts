import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
product:Product = new Product();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit():void {
    
  }
  
addProduct(){
  this.productService.addProduct(this.product).subscribe(data=> this.router.navigateByUrl("/qlsp"));
}
}