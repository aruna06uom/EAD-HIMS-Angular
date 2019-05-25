import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoard } from './dashBoard.component';

describe('CreateEmployeeComponent', () => {
  let component: DashBoard;
  let fixture: ComponentFixture<DashBoard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
