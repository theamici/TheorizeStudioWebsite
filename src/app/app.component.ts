import { Component } from '@angular/core';
import { Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  topTitle = "Theorize Studio";

  constructor (title: Title){
    title.setTitle("Theorize Studio");
  }
}