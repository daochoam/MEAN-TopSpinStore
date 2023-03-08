import { Injectable } from '@angular/core';
import { Color } from 'src/app/interfaces/store-interfaces';
import { MessagesService } from '../Messages/messages.service';
import { PeticionService } from '../Peticion/peticion.service';

@Injectable({
  providedIn: 'root'
})
export class RequestColorService {

  constructor(private Peticion: PeticionService, private Message:MessagesService) { }

   /*********************************  SAVE COLOR  **********************************/
   ColorSave(Payload:Color) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Color/Save',
      Payload: Payload,
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  /*********************************  LOAD COLOR  **********************************/
  LoadAllColors() {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Color/LoadAllColors',
      Payload: {},
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  LoadById(Id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Color/LoadById',
      Payload: { _id: Id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  /*********************************  UPDATE COLOR  **********************************/
  UpdateById(Payload:Color) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Color/UpdateById',
      Payload: Payload
    }
    console.log(Post.Payload)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  /*********************************  DELETE COLOR  **********************************/
  DeleteById(_id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Color/DeleteById',
      Payload: { _id: _id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }
}
