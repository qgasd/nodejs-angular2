import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-reset',
    templateUrl: '../app/reset-password/reset-password.component.html',
    styleUrls: ['../app/reset-password/reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() { }

    

}