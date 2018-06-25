import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { DomainsComponent } from './sections/domains/domains.component';
import { PresenceComponent } from './sections/presence/presence.component';
import { ArticleHeadlineComponent } from './sections/article-headline/article-headline.component';

import { BawoArticleComponent } from './articles/bawo-article/bawo-article.component';
import { GoldenHandsArticleComponent } from './articles/golden-hands-article/golden-hands-article.component';
import { InvestorsArticleComponent } from './articles/investors-article/investors-article.component';
import { PartnersArticleComponent } from './articles/partners-article/partners-article.component';

const appRoutes: Routes = [
  {
    path: "article",
    redirectTo: "/article/partners",
    pathMatch: "full"
  },
  { 
    path: "article",
    children: [
      {
        path: "bawo",
        component: BawoArticleComponent,
        data: { title: 'BaWo' }
      },
      {
        path: "goldenhands",
        component: GoldenHandsArticleComponent,
        data: { title: 'Golden Hands' }
      },
      {
        path: "investors",
        component: InvestorsArticleComponent,
        data: { title: 'Investors' }
      },
      {
        path: "partners",
        component: PartnersArticleComponent,
        data: { title: 'Partners' }
      }
    ]
  },
  {
    path: "**",
    redirectTo: "/article/partners"
  }
];


@NgModule({
  declarations: [
    AppComponent,
    
    DomainsComponent,
    PresenceComponent,
    ArticleHeadlineComponent,
    
    BawoArticleComponent,
    GoldenHandsArticleComponent,
    InvestorsArticleComponent,
    PartnersArticleComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}