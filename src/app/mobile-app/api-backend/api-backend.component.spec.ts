import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBackendComponent } from './api-backend.component';

describe('ApiBackendComponent', () => {
  let component: ApiBackendComponent;
  let fixture: ComponentFixture<ApiBackendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiBackendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
