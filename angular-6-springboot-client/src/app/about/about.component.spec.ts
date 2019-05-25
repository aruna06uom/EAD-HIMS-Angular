import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about.component';

describe('CreateEmployeeComponent', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ About ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
