import { Component } from '@angular/core';
import { ApiservicsService } from '../Services/apiservics.service';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [NgFor,CommonModule,HttpClientModule ],
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.css'
})
export class TestApiComponent {

   users: Array<any> = [];
   lsits: any="";
   todos: any = "";


  constructor(private userSerive:ApiservicsService){
    this.userSerive.getDate().subscribe(
      (data) =>{
        this.users=data;
      }
    );
  }

  getUserData()
  {
    
  }
  showListBtn(id:number){
    this.userSerive.getPostData(id).subscribe(
      (data) =>{
        
        this.lsits=data;
      }
    )
  }
  showTodosData(id:number){
    this.userSerive.getTodoData(id).subscribe(
      (data) => {
        this.todos=data;
      }
    )
  }

}
