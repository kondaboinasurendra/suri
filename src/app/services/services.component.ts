import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
requestUrl:any='https://fakestoreapi.com/products'
  products:any=[]
  constructor(private http:HttpClient){

  }
ngOnInit():void{
  this.http.get(this.requestUrl).subscribe(Response=>{
    this.products=Response;
  })
}  

}
