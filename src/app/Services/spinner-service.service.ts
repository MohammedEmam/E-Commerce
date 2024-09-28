import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {
  private loading: boolean = false;

  visibility: BehaviorSubject<boolean> = new BehaviorSubject(false);
  spinner:boolean = false

  constructor() {
    this.visibility = new BehaviorSubject(false);
  }
  
  // show() {
  //   this.visibility.next(true);
  //   this.visibility.subscribe({
  //     next:(data)=>{
  //       this.spinner = data
  //     }
  //   })
  // }

  // hide() {
  //   this.visibility.next(false);
  //   this.visibility.subscribe({
  //     next:(data)=>{
  //       this.spinner = data
  //     }
  //   })

  // }


  setLoading(loading: boolean) {
    this.loading = loading;
  }

  getLoading(): boolean {
    return this.loading;
  }



}
