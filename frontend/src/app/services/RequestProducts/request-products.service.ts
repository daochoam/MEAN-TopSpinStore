import { Injectable } from '@angular/core';
import { PeticionService } from '../Peticion/peticion.service';
import { MessagesService } from '../Messages/messages.service';

import { Products } from 'src/app/interfaces/store-interfaces';
declare var $: any;
declare var swal: any;

@Injectable({
  providedIn: 'root'
})

export class RequestProductsService {

  constructor(private Peticion: PeticionService, private msg: MessagesService) {

  }
  ngOnInit(): void {
  }

  ProductSave(Payload: Products) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/Save',
      Payload: Payload,
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.msg.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.msg.load("danger", Response.mensaje, 5000)
      }
    })
  }

  LoadAllProducts() {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/LoadAllProducts',
      Payload: {}
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  LoadById(Id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/LoadById',
      Payload: { Id: Id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  LoadByCode(Codigo: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/LoadByCode',
      Payload: { Codigo: Codigo }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  UpdateById(Payload: Products) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/UpdateById',
      Payload: Payload
    }
    console.log(Payload)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.msg.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.msg.load("danger", Response.mensaje, 5000)
      }
    })
  }

  UpdateByCode(Payload: Products) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/UpdateByCode',
      Payload: Payload
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.msg.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.msg.load("danger", Response.mensaje, 5000)
      }
    })
  }

  DeleteById(Id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/DeleteById',
      Payload: { _id: Id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  DeleteByCode(Codigo: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Products/DeleteByCode',
      Payload: { Codigo: Codigo }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }
}