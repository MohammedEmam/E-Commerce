import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {
  constructor(private _CartService:CartService){}
  ngOnInit(): void {
    this._CartService.AllOrders().subscribe({
      next:(response)=>{
        console.log(response);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
