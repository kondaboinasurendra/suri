import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  data= new BehaviorSubject(null);
  getData=this.data.asObservable();
  share(Product:any){
    this.data.next(Product);
  }
}
