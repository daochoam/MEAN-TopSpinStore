import { Component } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  constructor(public msj:MensajesService){

  }

}
