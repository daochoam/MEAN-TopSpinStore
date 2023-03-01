import { Injectable } from '@angular/core';
import { Users } from 'src/app/interfaces/store-interfaces';
import { MessagesService } from '../Messages/messages.service';
import { PeticionService } from '../Peticion/peticion.service';

declare var $: any

@Injectable({
  providedIn: 'root'
})
export class RequestUsersService {

  constructor(private Peticion: PeticionService, private Message: MessagesService) { }

  /*********************************  SAVE USERS  **********************************/
  UsersSave(Payload: Users) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/Save',
      Payload: Payload,
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  RegisterUsers(Payload: {Cedula: string, Name: string, Email: string, Password: string}) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/Register',
      Payload: Payload,
    }
    this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.Message.MessageOne(`Welcome ${Payload.Name}`, Response.mensaje, 'center', 'success', 2500)
      } else {
        this.Message.MessageOne('Oops...', Response.mensaje, 'center', 'error', 2500)
      }
    })
  }

  /*********************************  LOAD USERS  **********************************/
  LoadAllUsers() {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/LoadAllUsers',
      Payload: {},
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  LoadByDocument(Cedula: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/LoadByDocument',
      Payload: { Cedula: Cedula }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  LoadById(Id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/LoadById',
      Payload: { _id: Id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  /*********************************  UPDATE USERS  **********************************/
  UpdateById(Payload: Users) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/UpdateById',
      Payload: Payload
    }
    console.log(Post.Payload)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  UpdateByDocument(Payload: Users) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/LoadByDocument',
      Payload: Payload
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if (Response.state == true) {
        this.Message.load("success", Response.mensaje, 5000)
        $('#modaldatos').modal('hide')
      }
      else {
        this.Message.load("danger", Response.mensaje, 5000)
      }
    })
  }

  /*********************************  DELETE USERS  **********************************/
  DeleteById(_id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/DeleteById',
      Payload: { _id: _id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  DeleteByDocument(Cedula: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/DeleteByDocument',
      Payload: { Cedula: Cedula }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }
}
