import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderComponent } from './menu-order.component';

describe('MenuOrderComponent', () => {
  let component: MenuOrderComponent;
  let fixture: ComponentFixture<MenuOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
