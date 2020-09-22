import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HybridAppsComponent } from './hybrid-apps.component';

describe('HybridAppsComponent', () => {
  let component: HybridAppsComponent;
  let fixture: ComponentFixture<HybridAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HybridAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HybridAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
