import { Component } from '@angular/core';
import { Router, ActivatedRoute, Data } from "@angular/router";
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-article-headline',
  templateUrl: './article-headline.component.html',
  styleUrls: ['./article-headline.component.css']
})
export class ArticleHeadlineComponent {
  articleTitle: string;
  
  arrowFader: string;
  opacity: string;

  constructor(private router: Router, private activated: ActivatedRoute) { 
    this.router.events.subscribe(arg => {
      let fadeTimer = timer(0, 150);
      let subscription = fadeTimer.subscribe(currentValue => {
        
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

      fadeTimer.subscribe(currentValue => {
        if(currentValue >= 14) {
          subscription.unsubscribe();
          this.opacity = '1.0';
        }
      });
    });

    this.activated.data.subscribe((data: Data) => {
      this.articleTitle = data['title'];
    });
  }

}
