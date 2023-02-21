import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor() { }

  public datos:any[] = []

  private BorrarMsg(tiempo:number){

    setTimeout(() =>{
      this.datos.splice(0,1)
      
    },tiempo);
    

  }

  /**
   * Funcion para cargar msj
   * @param tipo //succes, info, primary, danger
   * @param mensaje // tu mensaje
   * @param tiempo //tiempo de espera
   */
  public load(tipo:string, mensaje:string,tiempo:number){
    this.datos.push({tipo:tipo, mensaje:mensaje})
    this.BorrarMsg(tiempo)
  }
  

}
