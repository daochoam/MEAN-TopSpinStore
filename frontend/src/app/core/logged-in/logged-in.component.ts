import { Component } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.css']
})
export class LoggedInComponent {
  SetUser=[
    {Title: "Set password",     Icon: "key"},
    {Title: "Manage account",   Icon: "gear"},
    {Title: "Shopping cart",    Icon: "cart-shopping"},
  ]
  LoggedForm=[
    {Id: "Wallet",    Title: "Payment methods",     Icon: "wallet"},
    {Id: "Shipping",  Title: "Shipping addresses",  Icon: "truck-fast"},
  ]
}
