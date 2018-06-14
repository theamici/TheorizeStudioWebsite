import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BawoArticleComponent } from './bawo-article.component';

describe('BawoArticleComponent', () => {
  let component: BawoArticleComponent;
  let fixture: ComponentFixture<BawoArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BawoArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BawoArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
