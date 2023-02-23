import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/Mensajes/mensajes.service';
import { PeticionService } from '../../services/Peticion/peticion.service';
 declare var $:any;
 declare var swal:any;




@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{



  constructor(private peticion:PeticionService, private msg:MensajesService){

  }
  ngOnInit(): void {
    this.CargarTodas()

  }
  codigo:string = "";
  nombre:string = "";
  fechav:string = "";
  precio:string = "";
  cantidad:string ="";
  categorias:string = "";
  listadatos:any[]=[]
  Id:string = ""

  // destino:string = this.peticion-urlLocal
  path:string = '/subir/imagenproductos'

  OpenModal(){
    $('#modaldatos').modal('show')
  }

  CloseModal(){
    $('#modaldatos').modal('hide')
  }

  Nuevo(){
    this.codigo = ""
    this.nombre = ""
    this.fechav = ""
    this.precio = "0"
    this.cantidad=""
    this.categorias =""
    this.Id     = ""
  }

  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/Products/Save',
      payload:{
        Codigo:  this.codigo,
        Nombre:  this.nombre,
        //fechav:  this.fechav,
        Precio:  this.precio,
        Cantidad:  this.cantidad,
        //categorias:  this.categorias
      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res:any) => {

        if(res.state == true){
          this.msg.load("success",res.mensaje, 5000)
          $('#modaldatos').modal('hide')
          this.CargarTodas()
        }
        else{
          this.msg.load("danger",res.mensaje, 5000)

        }
    }
    )

  }
  CargarTodas(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/Products/LoadAllProducts',
      payload:{

      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res:any) => {

        this.listadatos = res.data

    }
    )

  }

  CargarId(id:string){
    console.log(id)
    this.Id = id
    //this.path = this.path + '/' + this.Id

    var post = {
      host:this.peticion.urlLocal,
      path:'/Products/LoadByCode',
      payload:{
        Codigo :this.Id

      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res:any) => {
        //res.respuesta
        if(res.state == true){
          this.codigo = res.data.Codigo //res.respuesta.data
          this.nombre = res.data.Nombre
          //this.fechav = res.data.fechav
          this.cantidad = res.data.Cantidad
          this.precio = res.data.Precio
          //this.categorias = res.data.categorias
          $('#modaldatos').modal('show')
        }
        else{
          this.msg.load("danger",res.mensaje, 5000)

        }
    }
    )


  }

  ActualizarId(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/Products/UpdateByCode',
      payload:{
        //id:this.Id,
        Codigo:  this.codigo,
        Nombre: this.nombre,
        //fechav:  this.fechav,
        Precio:  this.precio,
        Cantidad: this.cantidad,
        //categorias:  this.categorias
      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res:any) => {

        if(res.state == true){
          this.msg.load("success",res.mensaje, 5000)
          $('#modaldatos').modal('hide')
          this.CargarTodas()
        }
        else{
          this.msg.load("danger",res.mensaje, 5000)

        }
    }
    )

  }
  Eliminar(){

    swal({
      title: "Esta seguro?",
      text: "Desea eliminar este registro!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete:any) => {
      if (willDelete) {

        var post = {
          host:this.peticion.urlLocal,
          path:'/Products/DeleteByCode',
          payload:{
            id:this.Id
          }

        }

        this.peticion.POST(post.host + post.path, post.payload).then(
          (res:any) => {

            if(res.state == true){
              this.msg.load("success",res.mensaje, 5000)
              $('#modaldatos').modal('hide')
              this.CargarTodas()
            }
            else{
              this.msg.load("danger",res.mensaje, 5000)

            }
        }
        )
      }


    });



}
}
