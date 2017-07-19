import { Component ,OnInit} from '@angular/core';
import { Menu } from "./menu/menu";
import { Http } from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
   public menus:Menu[];
    constructor(public http: Http) { 
        http.get('../app/menu/menu.json').subscribe(res =>
        this.menus = res.json());
    }
  ngOnInit() {

  }
}
