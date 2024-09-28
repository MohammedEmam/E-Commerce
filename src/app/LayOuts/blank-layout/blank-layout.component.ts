import { Component, OnInit } from '@angular/core';
import { SpinnerServiceService } from 'src/app/Services/spinner-service.service';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.scss']
})
export class BlankLayoutComponent implements OnInit {
  title = 'angular-boilerplate'
  loading:boolean = false

constructor(public _loading:SpinnerServiceService){}

ngOnInit() {
}


}
