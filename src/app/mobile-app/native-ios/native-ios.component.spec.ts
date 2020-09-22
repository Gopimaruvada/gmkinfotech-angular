import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeIosComponent } from './native-ios.component';

describe('NativeIosComponent', () => {
  let component: NativeIosComponent;
  let fixture: ComponentFixture<NativeIosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeIosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
