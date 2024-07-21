import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLeftModalComponent } from './time-left-modal.component';

describe('TimeLeftModalComponent', () => {
  let component: TimeLeftModalComponent;
  let fixture: ComponentFixture<TimeLeftModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeLeftModalComponent]
    });
    fixture = TestBed.createComponent(TimeLeftModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
