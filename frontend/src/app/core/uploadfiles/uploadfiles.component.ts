import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { event } from 'jquery';
import { UploadfilesService } from '../../services/Files/uploadfiles.service';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit{
  constructor(private UploadService:UploadfilesService){

  }
  ngOnInit(): void {
    console.log(this.urldestino)
    console.log(this.path)
    console.log(this.inputName)
  }

  selectedFiles:any
  archivoselecionado:any
  progress:number = 0
  filename:string = ""
  message = ""
  estado:boolean = false

  @Input() urldestino:string = ""
  @Input() path:string = ""
  @Input() inputName:string = ""

  selectfile(event:any){
    this.selectedFiles = event.target.files
    this.filename = this.selectedFiles[0].name
  }

  upload(){
    this.message = ""
    this.progress = 0
    this.archivoselecionado = this.selectedFiles.item(0)

    this.UploadService.upload(this.archivoselecionado,this.urldestino + this.path,this.inputName).subscribe(
      (event:any) =>{

        if(event.type == HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loadedn / event.total)

        }
        else if(event instanceof HttpResponse){
            this.message = event.body
            this.estado = event.body.state
            if(event.body.state == false){
              this.filename = ""
            }

        }

      }
    )

  }
  

}
