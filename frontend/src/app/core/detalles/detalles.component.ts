import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionService } from '../../services/peticion.service';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit{


  constructor(private actroute:ActivatedRoute, private peticion:PeticionService, private msg:MensajesService){}
  ngOnInit(): void {

    this.CargarId(this.actroute.snapshot.params["identificador"])
     
  }
  
  codigo:string = ""
  nombre:string = ""
  fechav:string = ""
  precio:string = "0"
  categorias:string =""
  Id:string =""

  CargarId(id:string){
    this.Id =id

    var post = {
      host:this.peticion.urlLocal,
      path:'/Productos/CargarId',
      payload:{
        id:id
        
      }
      
    }

    this.peticion.Post(post.host + post.path, post.payload).then(
      (res:any) => {

        if(res.state == true){
          this.codigo = res.data.codigo
          this.nombre = res.data.nombre
          this.fechav = res.data.fechav
          this.precio = res.data.precio
          this.categorias = res.data.categorias
          
        }
        else{
          this.msg.load("danger",res.mensaje, 5000)

        }      
    }
    )
    

  }


}
