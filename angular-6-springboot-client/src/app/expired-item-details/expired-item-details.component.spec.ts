import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredItemDetailsComponent } from './expired-item-details.component';

describe('ExpiredItemDetailsComponent', () => {
  let component: ExpiredItemDetailsComponent;
  let fixture: ComponentFixture<ExpiredItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
