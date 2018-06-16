import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, RouterEvent } from "@angular/router";
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-article-selector',
  templateUrl: './article-selector.component.html',
  styleUrls: ['./article-selector.component.css']
})
export class ArticleSelectorComponent implements OnInit {
  articleTitle: string = 'Partners';
  arrowFader: string = '';

  opacity: string;

  fadeTimer: Observable<number>;

  constructor(private router: Router, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.subscribe((e: RouterEvent) => {
      this.fadeTimer = timer(0, 175);
      let subscription = this.fadeTimer.subscribe(currentValue => {
        
        let calc = currentValue & 3;

        if (calc == 0) {
          this.arrowFader = '>';
          this.opacity = '0.5';
        }
        else if (calc == 1) {
          this.arrowFader = '>>';
          this.opacity = '0.65';
        }
        else {
          this.arrowFader = '>>>';
          this.opacity = '0.8';
        }
      });

      this.fadeTimer.subscribe(currentValue => {
        if(currentValue >= 18) {
          subscription.unsubscribe();
          this.opacity = '1.0';
        }
      });
    });
  }

  navToArticle(num: number) {
    let navStr = '';
    switch(num){
      case 1: {
        navStr = '/article/bawo';
        this.articleTitle = 'BaWo';
        break;
      }
      case 2: {
        navStr = '/article/goldenhands';
        this.articleTitle = 'Golden Hands';
        break;
      }
      case 3: {
        navStr = '/article/partners';
        this.articleTitle = 'Partners';
        break;
      }
      case 4: {
        navStr = '/article/investors';
        this.articleTitle = 'Investors';
        break;
      }
    }

    this.router.navigateByUrl(navStr);
  }
}