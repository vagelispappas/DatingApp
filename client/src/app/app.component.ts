import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService){}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: ()=> console.log('Request has completed')
    })
  }

  setCurrentUser(){
    const userStr: string = localStorage.getItem('user');
    if(!userStr)return;
    const user: User = JSON.parse(userStr);
    this.accountService.setCurrentUser(user);
  }
}
