import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-toon-list',
  templateUrl: './toon-list.component.html',
  styleUrls: ['./toon-list.component.css']
})


export class ToonListComponent implements OnInit {
  getToonList() {
    
  }
  constructor(private http: HttpClient) { 
    const toonList = '';

  }

  ngOnInit() {
    let characters = this.http.get('https://cors-anywhere.herokuapp.com/http://swgoh.gg/api/characters');
    characters.subscribe((response) => console.log(response));
    let toonList = Response;
  }

}
