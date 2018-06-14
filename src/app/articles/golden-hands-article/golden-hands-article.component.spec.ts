import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenHandsArticleComponent } from './golden-hands-article.component';

describe('GoldenHandsArticleComponent', () => {
  let component: GoldenHandsArticleComponent;
  let fixture: ComponentFixture<GoldenHandsArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenHandsArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenHandsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
