import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {
  // observable of the SwitchService instance
  $LookUpRegister = new EventEmitter<any>();
  $LookUpLogin = new EventEmitter<any>();

  constructor() { }
}
