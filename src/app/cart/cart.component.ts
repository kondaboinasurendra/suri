import { Component } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products:any=[] 

  
  cartCount:any=0;
    totalAmount:any=0;  

  constructor(private share:ShareService){
    this.share.getData.subscribe(data=>{
      if(data){
        this.products.push(data);
        console.log(this.products)
        this.cartCount = this.products.length;
        this.totalAmount=this.products.reduce((accumulator:any,data:any)=>accumulator+data.price,0)
      }
    }
      )}
      
      Delete(index:any){
        this.products.splice(index,1)
        this.totalAmount=this.products.reduce((accumulator:any,data:any)=>accumulator+data.price,0)
      }


  }