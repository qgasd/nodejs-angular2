import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/index';

@Component({
    selector: 'app-login',
    templateUrl: '../app/login/login.component.html',
    styleUrls: ['../app/login/login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(
        public router: Router,
        private loginService:LoginService,
    ) { }

    ngOnInit() { }

    onLoggedin(name:string,password:string) {
        this.loginService.login(name,password).subscribe(
            data=>{
                this.router.navigate(['/dashboard']);
            },
            error=>{
                alert("验证失败");
            }
        );

        // var express = require('express');
        // var app = express();
        
        // app.get('/', function (req:any, res:any) {
        // res.send('Hello World');
        // })
        
        // var server = app.listen(8081, function () {
        
        // var host = server.address().address
        // var port = server.address().port
        
        // console.log("应用实例，访问地址为 http://%s:%s", host, port)
        
        // })
        let user:[string,number];
        user=["kuba",123];
        if(name){

        }
       console.info();
        localStorage.setItem('isLoggedin', 'true');
        if(name != null && password != null){
        this.router.navigate(['/dashboard']);
        }
       
        
    }

}
