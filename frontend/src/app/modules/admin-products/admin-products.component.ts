import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import { MessagesService } from 'src/app/services/Messages/messages.service';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';

import { Products, Category, NamesFormat } from 'src/app/interfaces/store-interfaces';
import { RequestCategoryService } from 'src/app/services/RequestCategory/request-category.service';

declare var $: any;
const numCharacters: number = 300
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminProductsComponent implements OnInit {

  counts: number = numCharacters;
  Category: any[] = [];
  /**  DECLARACIÓN DE VARIABLES  */
  Id: string = "";
  SKU: string = "";
  Nombre: string = "";
  FechaV: string = "";
  Precio: string = "";
  Cantidad: string = "";
  Categoria: Category["Name"] = "";
  Descripcion: string = "";
  ListProducts!: [Products];
  ListCategory!: [Category];

  constructor(public RequestCategory: RequestCategoryService,
    public RequestProduct: RequestProductsService,
    private Message: MessagesService,) { }

  ngOnInit(): void {
    this.LoadAllCategories()
    this.LoadAllProducts()
  }

  /*************** MODAL *****************/
  OpenModal() {
    $('#modaldatos').modal('handleUpdate')
    $('#modaldatos').modal('show')
  }

  CloseModal() {
    $('#modaldatos').modal('hide')
    this.Nuevo()
  }

  /*************** BUTTON NUEVO *****************/
  Nuevo() {
    this.SKU = ""
    this.Nombre = ""
    this.FechaV = ""
    this.Precio = ""
    this.Cantidad = ""
    this.Categoria = ""
    this.Descripcion = ""
    this.Id = ""
    this.counts = numCharacters;
  }

  /*************** COUNTS CHARACTERS ***************/



  /*************** CARGAR DATOS *****************/
  LoadAllCategories() {
    this.RequestCategory.LoadAllCategory().then((Response: any) => {
      this.ListCategory = Response.data
    })
  }

  LoadAllProducts() {
    this.RequestProduct.LoadAllProducts().then((Response: any) => {
      this.ListProducts = Response.data
      console.log(this.ListProducts)
    })
  }

  LoadById(Id: string) {
    this.Id = Id
    this.RequestProduct.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          this.SKU = Response.data.SKU
          this.Nombre = Response.data.Nombre
          this.Cantidad = Response.data.Cantidad
          this.Precio = Response.data.Precio
          if (Response.data.Categoria != undefined) { this.Categoria = Response.data.Categoria }
          if (Response.data.Descripcion != undefined) { this.Descripcion = Response.data.Descripcion }
          $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.data.mensaje, 5000)
        }
      })
  }

  /*************** BUTTON GUARDAR *****************/
  Save() {
    this.RequestProduct.ProductSave({
      SKU: this.SKU,
      Nombre: NamesFormat(this.Nombre),
      Precio: this.Precio,
      Cantidad: this.Cantidad,
      Categoria: this.Categoria,
      Descripcion: this.Descripcion,
    }).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        this.LoadAllProducts()
        this.Nuevo()
        $('#modaldatos').modal('hide')
      }
      else {
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  /*************** BUTTON ACTUALIZAR *****************/
  UpdateId() {
    console.log(this.Categoria)
    this.RequestProduct.UpdateById({
      _id: this.Id,
      SKU: this.SKU,
      Nombre: NamesFormat(this.Nombre),
      Precio: this.Precio.toString(),
      Cantidad: this.Cantidad.toString(),
      Categoria: this.Categoria,
      Descripcion: this.Descripcion
    }).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
        this.LoadAllProducts()
        this.Nuevo()
      }
      else {
        $('#modaldatos').modal('hide')
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  /***************  BUTTON ELIMINAR  ******************/
  DeleteById() {
    this.Message.MessageDelete().then((willDelete) => {
      if (willDelete.isConfirmed) {
        this.Message.MessageOne('Deleted!', 'The product has been successfully removed.', 'center', 'success', 1000, false)
        this.RequestProduct.DeleteById(this.Id).then(() => {
          this.LoadAllProducts()
          this.Nuevo()
          $('#modaldatos').modal('hide')
        })
      }
    })
  }
}

