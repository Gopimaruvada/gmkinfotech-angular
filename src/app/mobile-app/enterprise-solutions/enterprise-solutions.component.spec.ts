import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSolutionsComponent } from './enterprise-solutions.component';

describe('EnterpriseSolutionsComponent', () => {
  let component: EnterpriseSolutionsComponent;
  let fixture: ComponentFixture<EnterpriseSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
