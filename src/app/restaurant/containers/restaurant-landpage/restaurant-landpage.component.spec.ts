import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantLandpageComponent } from './restaurant-landpage.component';

describe('RestaurantLandpageComponent', () => {
  let component: RestaurantLandpageComponent;
  let fixture: ComponentFixture<RestaurantLandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantLandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
