import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: '../app/login/login.component.html',
    styleUrls: ['../app/login/login.component.css']
})

export class LoginComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() { }

    onLoggedin(name:string,password:string) {
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
        if(name){
            alert("名字是："+name+",密码是："+password);
        }
       console.info();
        localStorage.setItem('isLoggedin', 'true');
        
        this.router.navigate(['/dashboard']);
       
        
    }

}
