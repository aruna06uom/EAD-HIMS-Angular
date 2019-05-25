import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUs } from './contactUs.component';

describe('CreateEmployeeComponent', () => {
  let component: ContactUs;
  let fixture: ComponentFixture<ContactUs>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUs ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
``