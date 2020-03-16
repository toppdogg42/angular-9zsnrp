import { Component, OnInit } from '@angular/core';
import {Data} from '../MockData';

@Component({
  selector: 'app-qlsp',
  templateUrl: './qlsp.component.html',
  styleUrls: ['./qlsp.component.css']
})
export class QlspComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products = Data;
  removeItem(id){
    this.products = this.products.filter(product => product.id != id);
  }
}