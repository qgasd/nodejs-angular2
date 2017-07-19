// import { Injectable } from '@angular/core';
// import { Headers, Http,RequestOptions, Response } from '@angular/http';

// import 'rxjs/add/operator/toPromise';
// import { Observable } from 'rxjs';

// @Injectable()
// export class MenuService{
//     private httpUrl = 'menu.json';
//     constructor(private http:Http){

//     }

//     httpGet(){
//         let headers = new Headers();
//         headers.append('Content-type','application/json');
//         let options = new RequestOptions({headers:headers});
//         return this.http.get(this.httpUrl,options)
//             .toPromise()
//             .then(reponse=>this.test=response.json().data)
//             .catch(this.handleError);
//     }
// }