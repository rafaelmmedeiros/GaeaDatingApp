import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;

  constructor(private accoutService: AccountService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accoutService.login(this.model).subscribe(
      (response) => {
        console.log(response);
        this.loggedIn = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    this.accoutService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accoutService.currentUser$.subscribe(
      (user) => {
        this.loggedIn = !!user; //  !! is: If it´s null return false.
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
