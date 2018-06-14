import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { DomainsComponent } from './sections/domains/domains.component';
import { PresenceComponent } from './sections/presence/presence.component';
import { ArticleSelectorComponent } from './sections/article-selector/article-selector.component';
import { ArticleHeadlineComponent } from './sections/article-headline/article-headline.component';
import { ArticleContentComponent } from './sections/article-content/article-content.component';

import { BawoArticleComponent } from './articles/bawo-article/bawo-article.component';
import { GoldenHandsArticleComponent } from './articles/golden-hands-article/golden-hands-article.component';
import { InvestorsArticleComponent } from './articles/investors-article/investors-article.component';
import { PartnersArticleComponent } from './articles/partners-article/partners-article.component';

const appRoutes: Routes = [
  { 
  path: '',
  component: AppComponent,
  children: [
    {
      path: "bawo",
      component: BawoArticleComponent
    },
    {
      path: "goldenhands",
      component: GoldenHandsArticleComponent
    },
    {
      path: "investors",
      component: InvestorsArticleComponent
    },
    {
      path: "partners",
      component: PartnersArticleComponent
    },
  ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    
    DomainsComponent,
    PresenceComponent,
    ArticleSelectorComponent,
    ArticleHeadlineComponent,
    ArticleContentComponent,
    
    BawoArticleComponent,
    GoldenHandsArticleComponent,
    InvestorsArticleComponent,
    PartnersArticleComponent,
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
export class AppModule {
}
