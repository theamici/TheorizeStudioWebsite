import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsArticleComponent } from './investors-article.component';

describe('InvestorsArticleComponent', () => {
  let component: InvestorsArticleComponent;
  let fixture: ComponentFixture<InvestorsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
