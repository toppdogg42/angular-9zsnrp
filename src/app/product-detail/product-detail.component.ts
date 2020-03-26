import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../service/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
//  @Input('data') product: Product;
 product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
  this.route.params.subscribe(param=>{
     this.productService.getProduct(param.productID).subscribe(data =>{
       this.product= data;
     });
    })
}
}