import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';
import { PeticionService } from '../../services/peticion.service';
 declare var $:any;


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
   
  codigo:string = "";
  nombre:string = "";
  fechav:string = "";
  listadatos:any[]=[]
  Id:string = ""

  constructor(private peticion:PeticionService, private msg:MensajesService){

  }
  ngOnInit(): void {
    this.CargarTodas()
      
  }
 
  OpenModal(){
    $('#modaldatos').modal('show')
  }

  Nuevo(){
    this.codigo = ""
    this.nombre = ""
    this.fechav = ""
  }

  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/Productos/Guardar',
      payload:{
        codigo:  this.codigo,
        noombre: this.nombre,
        fechav:  this.fechav
      }
      
    }

    this.peticion.Post(post.host + post.path, post.payload).then(
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

    this.peticion.Post(post.host + post.path, post.payload).then(
      (res:any) => {

        this.listadatos = res.data
 
    }
    )

  }

  CargarId(id:string){
    console.log(id)
    this.Id = id

    var post = {
      host:this.peticion.urlLocal,
      path:'/Productos/CargarId',
      payload:{
        id:this.Id
        
      }
      
    }

    this.peticion.Post(post.host + post.path, post.payload).then(
      (res:any) => {

        if(res.state == true){
          this.codigo = res.data.codigo
          this.nombre = res.data.nombre
          this.fechav = res.data.fechav
          $('#modaldatos').modal('show')
        }
        else{
          this.msg.load("danger",res.mensaje, 5000)

        }      
    }
    )
    

  }

  Actualizar(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/Productos/ActualizarId"',
      payload:{
        id:this.Id,
        codigo:  this.codigo,
        noombre: this.nombre,
        fechav:  this.fechav
      }
      
    }

    this.peticion.Post(post.host + post.path, post.payload).then(
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

}
