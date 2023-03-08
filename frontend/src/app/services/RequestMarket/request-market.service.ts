import { Injectable } from '@angular/core';
import { Market } from 'src/app/interfaces/store-interfaces';
import { PeticionService } from '../Peticion/peticion.service';

@Injectable({
  providedIn: 'root'
})
export class RequestMarketService {

  constructor(private Peticion: PeticionService) { }



  AddMarket(Payload:Market) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Market/AddMarket',
      Payload: Payload,
    }
    console.log(Post)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  // UpdateQuantity({Id:Market["_id"], Quantity:Market["Quantity"]}) {
  //   var Post = {
  //     Host: this.Peticion.urlLocal,
  //     Path: '/Market/UpdateQuantity',
  //     Payload: {
  //       _id: Id,
  //       Quantity: Quantity}
  //   }
  //   return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  // }

  LoadMyMarket(Id: string) {
    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Market/LoadMyMarket',
      Payload: { Id: Id }
    }
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  DeleteItem(Payload: Market) {

    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Market/DeleteItem',
      Payload: Payload
    }
    console.log(Payload)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }

  DeleteAllItem(Payload: Market) {

    var Post = {
      Host: this.Peticion.urlLocal,
      Path: '/Market/DeleteAllItem',
      Payload: Payload
    }
    console.log(Payload)
    return this.Peticion.POST(Post.Host + Post.Path, Post.Payload)
  }
}
