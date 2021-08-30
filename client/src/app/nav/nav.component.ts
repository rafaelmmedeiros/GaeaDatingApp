import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  menuVisibilite: boolean = false;

  constructor(
    public accoutService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void { }

  login() {
    this.accoutService.login(this.model).subscribe(
      (response) => {
        this.router.navigateByUrl('/members');
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.error);
      }
    );
  }

  logout() {
    this.router.navigateByUrl('/');
    this.accoutService.logout();
  }

  toggleMenu() {
    this.menuVisibilite = !this.menuVisibilite;
  }
}
