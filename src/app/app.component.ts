import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit { 
  isAutoScrolling = false;

  subtitleAudio: HTMLAudioElement;
  socialAudio: HTMLAudioElement;

  constructor(private router: Router) {}

  ngOnInit()
  {
    this.subtitleAudio = <HTMLAudioElement>(document.getElementById("subtitleAudio"));
    this.socialAudio = <HTMLAudioElement>(document.getElementById("socialAudio"));

    let baseAudioDelay = 1400;
    let subtitleAudioDelay = baseAudioDelay;
    let socialAudioDelay = 1500 + baseAudioDelay;

    timer(subtitleAudioDelay).subscribe(() => {
      this.subtitleAudio.play();
    },
    (error:any) => {
      console.log(error);
    });

    timer(socialAudioDelay).subscribe(() => {
      this.socialAudio.play();
    },
    (error:any) => {
      console.log(error);
    });
  
  }

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