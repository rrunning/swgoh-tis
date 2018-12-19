import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FetchCharactersService {
  
  apiUrl = 'https://cors-anywhere.herokuapp.com/http://swgoh.gg'

  
  constructor() { }


}
