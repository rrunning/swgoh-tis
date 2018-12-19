import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://swgoh.gg/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
// const ApiSwgohHelp = require('api-swgoh-help');
// const swapi = new ApiSwgohHelp({
//   "username": "rrunning",
//   "password": "qwyxj.712"
// });

@Injectable({
  providedIn: 'root'
})

export class RestService {


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // let obs = this.http.get('https://swgoh.gg/api/characters');
    // obs.subscribe(() => console.log('Got the response'));  
  }
}
