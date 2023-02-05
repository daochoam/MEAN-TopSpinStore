import { Component } from '@angular/core';

interface iPerson {
  CC: number;
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  Phone: number;
  Address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

}
