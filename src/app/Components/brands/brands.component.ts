import { Component, OnInit } from '@angular/core';
import { BlankService } from 'src/app/Services/blank.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandsList:any
  constructor(private _BlankService:BlankService){}
  ngOnInit(): void {
    this._BlankService.GetAllBrands().subscribe({
      next:(response)=>{
        this.brandsList = response
        console.log(response);
        
      }
    })
  }

}
