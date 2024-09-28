import { Component, OnInit } from '@angular/core';
import { BlankService } from 'src/app/Services/blank.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categoryList:any
  constructor(private _BlankService:BlankService){}
  ngOnInit(): void {
    this._BlankService.GetAllCategories().subscribe ({
      next:(response)=>{
        this.categoryList = response
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
