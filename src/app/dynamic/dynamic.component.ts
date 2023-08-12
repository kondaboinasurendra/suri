import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit{
  productsUpi:any=environment.apiUrl+"products"
  products:any=[]
  constructor(private http:HttpClient,private share:ShareService){

  }
  ngOnInit(): void {
    this.http.get(this.productsUpi).subscribe(Response=>{
      this.products=Response
    })
    
  }
  add(data:any){
    this.share.share(data);
    
  }
  suri:any=[]
  viewdetalies(data:any){
    alert(data.id)
    this.suri=data;
    console.log(this.products)
  
  }

}
