import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from 'src/app/services/Peticion/peticion.service';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Datos: any[] = []
  constructor(public Peticion: PeticionService,
    public RequestProduct: RequestProductsService,
    private actrouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.actrouter.snapshot.params['grupo'])
    var Datos = this.RequestProduct.LoadAllProducts()

    this.RequestProduct.LoadAllProducts().then((Response: any) => {
      setTimeout(() => {
        this.Datos = Response.data.filter((item: any) => parseInt(item.Categoria) == parseInt(this.actrouter.snapshot.params['grupo']))
        console.log(this.actrouter.snapshot.params['grupo'])
      }, 1000);
    })

  }

  ngAfterContentInit() {

  }
}
//
