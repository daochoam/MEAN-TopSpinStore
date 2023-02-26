import { Injectable } from '@angular/core';
import { MessagesService } from '../Messages/messages.service';
import { PeticionService } from '../Peticion/peticion.service';

interface Registro {
  Cedula:string,
  Name:string,
  Email:string,
  Password:string
}

@Injectable({
  providedIn: 'root'
})
export class RequestUsersService {

  constructor(private Peticion:PeticionService, private Message:MessagesService) { }

  RegisterUsers(Payload:Registro){
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/Register',
      Payload: Payload,
    }
    this.Peticion.POST(Post.Host + Post.Path, Post.Payload).then((Response: any) => {
      if(Response.state==true){
        this.Message.MessageOne(`Welcome ${Payload.Name}`,Response.mensaje,'center','success',2500)
      }else{
        this.Message.MessageOne('Oops...',Response.mensaje,'center','error',2500)
      }
    })
  }

  LoadAllUsers() {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Users/LoadAllUsers',
      Payload: {},
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
    }
  }

