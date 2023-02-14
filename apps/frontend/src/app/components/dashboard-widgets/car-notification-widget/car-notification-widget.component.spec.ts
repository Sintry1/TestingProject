import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNotificationWidgetComponent } from './car-notification-widget.component';

describe('CarNotificationWidgetComponent', () => {
  let component: CarNotificationWidgetComponent;
  let fixture: ComponentFixture<CarNotificationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarNotificationWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarNotificationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
