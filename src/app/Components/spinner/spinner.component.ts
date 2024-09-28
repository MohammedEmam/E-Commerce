import { Component, ViewEncapsulation } from '@angular/core';
import { SpinnerServiceService } from 'src/app/Services/spinner-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom

})
export class SpinnerComponent {
constructor(public loader: SpinnerServiceService){}
}
