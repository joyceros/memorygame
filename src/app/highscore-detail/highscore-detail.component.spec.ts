import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighscoreDetailComponent } from './highscore-detail.component';

describe('HighscoreDetailComponent', () => {
  let component: HighscoreDetailComponent;
  let fixture: ComponentFixture<HighscoreDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighscoreDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighscoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
