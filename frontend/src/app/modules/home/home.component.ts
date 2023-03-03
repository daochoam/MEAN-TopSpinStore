import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/store-interfaces';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListProducts!: [Products];

  constructor(public RequestProduct:RequestProductsService) { }

  public ngOnInit(): void {
    this.LoadAllProducts()
  }

  /*************** CARGAR DATOS *****************/
  LoadAllProducts() {
    this.RequestProduct.LoadAllProducts().then((Response: any) => {
      this.ListProducts = Response.data
    })
  }
}
