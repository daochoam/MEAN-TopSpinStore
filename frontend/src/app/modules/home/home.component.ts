import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../services/peticion.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private peticion: PeticionService) { }
  listadatos: any[] = []

  public ngOnInit(): void {
    this.CargarProductos()
  }

  CargarProductos() {

    var post = {
      host: this.peticion.urlLocal,
      path: '/Productos/CargarTodas',
      payload: {

      }

    }

    this.peticion.POST(post.host + post.path, post.payload).then(
      (res: any) => {

        this.listadatos = res.data

      }
    )

  }

}
