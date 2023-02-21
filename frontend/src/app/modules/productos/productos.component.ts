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
  categorias:string = "";
  listadatos:any[]=[]
  Id:string = ""

  // destino:string = this.peticion-urlLocal
  // path:string = '/subir/imagenproductos'

  OpenModal(){
    $('#modaldatos').modal('show')
  }

  Nuevo(){
    this.codigo = ""
    this.nombre = ""
    this.fechav = ""
    this.precio = "0"
    this.categorias =""
    this.Id     = ""
  }

  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/Productos/Guardar',
      payload:{
        codigo:  this.codigo,
        noombre: this.nombre,
        fechav:  this.fechav,
        precio:  this.precio,
        categorias:  this.categorias
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
      path:'/Productos/CargarTodas',
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
      path:'/Productos/CargarId',
      payload:{
        id:this.Id

      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res:any) => {

        if(res.state == true){
          this.codigo = res.data.codigo
          this.nombre = res.data.nombre
          this.fechav = res.data.fechav
          this.precio = res.data.precio
          this.categorias = res.data.categorias
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
      path:'/Productos/ActualizarId"',
      payload:{
        id:this.Id,
        codigo:  this.codigo,
        noombre: this.nombre,
        fechav:  this.fechav,
        precio:  this.precio,
        categorias:  this.categorias
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
          path:'/Productos/Eliminar"',
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
