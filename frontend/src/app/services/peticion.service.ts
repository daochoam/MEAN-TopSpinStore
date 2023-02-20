import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(private http: HttpClient) { }

  public urlLocal: string = "http://localhost:3000"

  POST(url: string, data: {}) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, data)
        .toPromise()
        .then((res: any) => {
          resolve(res)
        })
    })
    return promise
  }

  GET(url: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then((res: any) => {
          resolve(res)
        })
    })
    return promise
  }
}
