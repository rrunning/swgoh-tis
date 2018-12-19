import { Component, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this super dope app';
  

  constructor(private http: HttpClient) {
  }
  ngOnInit() {

    
    
  }


}
