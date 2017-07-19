import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Menu} from './menu';
import { Http } from "@angular/http";

@Component({
    selector: 'app-menu',
    templateUrl: '../app/menu/menu.component.html',
    styleUrls: ['../app/menu/menu.component.css']
})
export class MenuComponent implements OnInit {

    public menus:Menu[];
    constructor(public http: Http) { 
        http.get('../app/menu/menu.json').subscribe(res =>
        this.menus = res.json());
    }

    ngOnInit() { }

}

