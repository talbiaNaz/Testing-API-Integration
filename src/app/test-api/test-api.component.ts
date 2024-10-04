import { Component, NgModule } from '@angular/core';
import { ApiservicsService } from '../Services/apiservics.service';
import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [NgFor,HttpClientModule ],
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.css'
})
export class TestApiComponent {

   users: Array<any> = [];

  constructor(private userSerive:ApiservicsService){}

  ngOnInit()
  {
    this.userSerive.getDate().subscribe(
      (data) =>{
        this.users=data;
      }
    );
  }

}
