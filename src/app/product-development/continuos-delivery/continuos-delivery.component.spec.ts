import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuosDeliveryComponent } from './continuos-delivery.component';

describe('ContinuosDeliveryComponent', () => {
  let component: ContinuosDeliveryComponent;
  let fixture: ComponentFixture<ContinuosDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuosDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuosDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
