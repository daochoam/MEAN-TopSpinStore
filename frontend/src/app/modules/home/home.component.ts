import { Component, OnInit } from '@angular/core';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private RequestProducts:RequestProductsService) { }
  ListaDatos: any[] = []

  public ngOnInit(): void {
    this.RequestProducts.LoadAllProducts().then((Response: any) => {
        this.ListaDatos = Response.data
      })
  }
}

