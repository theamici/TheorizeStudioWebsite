import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersArticleComponent } from './partners-article.component';

describe('PartnersArticleComponent', () => {
  let component: PartnersArticleComponent;
  let fixture: ComponentFixture<PartnersArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
