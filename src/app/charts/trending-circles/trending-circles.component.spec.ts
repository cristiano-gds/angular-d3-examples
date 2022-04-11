import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCirclesComponent } from './trending-circles.component';

describe('TrendingCirclesComponent', () => {
  let component: TrendingCirclesComponent;
  let fixture: ComponentFixture<TrendingCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCirclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
