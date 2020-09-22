import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeAndroidComponent } from './native-android.component';

describe('NativeAndroidComponent', () => {
  let component: NativeAndroidComponent;
  let fixture: ComponentFixture<NativeAndroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NativeAndroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
