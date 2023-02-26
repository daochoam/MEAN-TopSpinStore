import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/Messages/messages.service';
import { RequestProductsService } from 'src/app/services/RequestProducts/request-products.service';
import { PeticionService } from '../../services/Peticion/peticion.service';
declare var $: any;
import Swal from 'sweetalert2';
import { Products } from 'src/app/interfaces/store-interfaces';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  /**  DECLARACIÓN DE VARIABLES  */
  Codigo: string = "";
  Nombre: string = "";
  FechaV: string = "";
  Precio: string = "";
  Cantidad: string = "";
  Categorias: string = "";
  ListaDatos!: [Products];
  Id: string = ""

  constructor(private peticion: PeticionService,
              private RequestProduct: RequestProductsService,
              private Message:MessagesService,) { }

  ngOnInit(): void {
    this.RequestProduct.LoadAllProducts().then((res: any) => {  this.ListaDatos = res.data  })
  }

  // destino:string = this.peticion-urlLocal
  //path:string = '/subir/imagenproductos'

  OpenModal() {
    $('#modaldatos').modal('show')
  }

  CloseModal() {
    $('#modaldatos').modal('hide')
  }

  Nuevo() {
    console.log(this.ListaDatos)
    this.Codigo = ""
    this.Nombre = ""
    this.FechaV = ""
    this.Precio = ""
    this.Cantidad = ""
    this.Categorias = ""
    this.Id = ""
  }

  /** BOTON GUARDAR **/
  Guardar() {
    this.RequestProduct.ProductSave({
      Codigo: this.Codigo,
      Nombre: this.Nombre,
      Precio: this.Precio,
      Cantidad: this.Cantidad,
    }).then(() => {
      this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
    })
  }

  CargaPorId(Id: string) {
    this.Id=Id
    this.RequestProduct.LoadById(Id)
      .then((Response: any) => {
        if (Response.state == true) {
          this.Codigo = Response.data.Codigo
          this.Nombre = Response.data.Nombre
          this.Cantidad = Response.data.Cantidad
          this.Precio = Response.data.Precio
          $('#modaldatos').modal('show')
        } else {
          this.Message.load("danger", Response.data.mensaje, 5000)
        }
      })
  }

  ActualizarId() {
    this.RequestProduct.UpdateById({
      _id: this.Id,
      Codigo: this.Codigo,
      Nombre: this.Nombre,
      Precio: this.Precio,
      Cantidad: this.Cantidad,
    }).then(()=>{
      this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
    })
  }

  Eliminar() {
      this.Message.MessageDelete().then((willDelete) => {
        if (willDelete) {
          this.Message.MessageOne(
            'Deleted!',
            'The product has been successfully removed.',
            'center',
            'success',
            1000,
            false)
          this.RequestProduct.DeleteById(this.Id).then(()=>{
          this.RequestProduct.LoadAllProducts().then((res: any) => { this.ListaDatos = res.data })
          this.Nuevo()
          $('#modaldatos').modal('hide')
        })
        }
      })
    }
}

