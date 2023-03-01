import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { MessagesService } from 'src/app/services/Messages/messages.service';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';

import { Products, categoryProducts, NamesFormat } from 'src/app/interfaces/store-interfaces';

declare var $: any;
const numCharacters: number = 300
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnInit {

  counts:number = numCharacters;
  /**  DECLARACIÓN DE VARIABLES  */
  Id: string = "";
  Codigo: string = "";
  Nombre: string = "";
  FechaV: string = "";
  Precio: string = "";
  Cantidad: string = "";
  Categoria: categoryProducts = "";
  Descripcion: string ="";
  ListaDatos!: [Products];

  Category: Array<{ value: categoryProducts }> = [
    { value: 'Blades' },
    { value: 'Rubbers' },
    { value: 'Balls' },
    { value: 'Tables' },
    { value: 'Nets' }
  ];

  constructor(private RequestProduct: RequestProductsService,
              private Message: MessagesService,) { }

  ngOnInit(): void {
    this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
  }

  // destino:string = this.peticion-urlLocal
  //path:string = '/subir/imagenproductos'

  /*************** MODAL *****************/
  OpenModal() {
    $('#modaldatos').modal('handleUpdate')
    $('#modaldatos').modal('show')}

  CloseModal() {
    $('#modaldatos').modal('hide')
    this.Nuevo()}

  /*************** BUTTON NUEVO *****************/
  Nuevo() {
    this.Codigo = ""
    this.Nombre = ""
    this.FechaV = ""
    this.Precio = ""
    this.Cantidad = ""
    this.Categoria = ""
    this.Descripcion =""
    this.Id = ""
    this.counts = numCharacters;}

  /*************** COUNTS CHARACTERS ***************/



  /*************** CARGAR DATOS *****************/
  CargaPorId(Id: string) {
    this.Id = Id
    this.RequestProduct.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          this.Codigo = Response.data.Codigo
          this.Nombre = Response.data.Nombre
          this.Cantidad = Response.data.Cantidad
          this.Precio = Response.data.Precio
          this.Categoria = Response.data.Categoria
          //this.Descripcion = Response.data.Descripcion
          $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.data.mensaje, 5000)
        }
      })
  }

  /*************** BUTTON GUARDAR *****************/
  Guardar() {
    this.RequestProduct.ProductSave({
      Codigo: this.Codigo,
      Nombre: NamesFormat(this.Nombre),
      Precio: this.Precio,
      Cantidad: this.Cantidad,
      Descripcion: this.Descripcion,
    }).then(() => {
      this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
      this.Nuevo()
    })
  }

  /*************** BUTTON ACTUALIZAR *****************/
  ActualizarId() {
    console.log(this.Categoria)
    this.RequestProduct.UpdateById({
      _id: this.Id,
      Codigo: this.Codigo,
      Nombre: NamesFormat(this.Nombre),
      Precio: this.Precio.toString(),
      Cantidad: this.Cantidad.toString(),
      Categoria: this.Categoria,
      Descripcion: this.Descripcion
    }).then(() => {
      this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
      this.Nuevo()
    })
  }

  /***************  BUTTON ELIMINAR  ******************/
  Eliminar() {
    this.Message.MessageDelete().then((willDelete) => {
      if (willDelete.isConfirmed) {
        this.Message.MessageOne('Deleted!', 'The product has been successfully removed.', 'center', 'success', 1000, false)
        this.RequestProduct.DeleteById(this.Id).then(() => {
          this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
          this.Nuevo()
          $('#modaldatos').modal('hide')
        })
      }
    })
  }
}

