import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{environment} from '../../environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
   
  usersApi:any=environment.apiUrl+'users'
  //userApi;any=''myuser;any=[] constructor[private http;httpclien],ngonint;void[this.http.get[this.usersapi].subscribe[response=[this.myusers=response;]]]
  myUsers:any=[]
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.http.get(this.usersApi).subscribe(Response=>{
      this.myUsers=Response;
      console.log(this.myUsers)
    })
  }
  //delete[index;any][this.myusers.splice[index,1]]
    delete(index:any){
      this.myUsers.splice(index,1)  
      alert(index)    
    
  }
  update(index:any){
    this.myUsers.push(index,1)
    alert(index)
  }

}
