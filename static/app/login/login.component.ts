import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: '../app/login/login.component.html',
    styleUrls: ['../app/login/login.component.css']
})

export class LoginComponent implements OnInit {
  model : any = {};
    constructor(public router: Router) { }

    ngOnInit() { }

    onLoggedin() {
       console.info();
        localStorage.setItem('isLoggedin', 'true');
        if(this.model.name != null && this.model.password != null){
        this.router.navigate(['/dashboard']);
        }
       
        
    }

}
