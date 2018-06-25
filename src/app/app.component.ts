import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent { 
  isAutoScrolling = false;

  constructor(private router: Router) {}

  navToArticle(num: number) {
    let navStr = '';
    switch(num){
      case 1: {
        navStr = '/article/bawo';
        break;
      }
      case 2: {
        navStr = '/article/goldenhands';
        break;
      }
      case 3: {
        navStr = '/article/partners';
        break;
      }
      case 4: {
        navStr = '/article/investors';
        break;
      }
    }

    this.router.navigateByUrl(navStr);
  }
}