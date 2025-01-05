import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMonitorServiceComponent } from './activity-monitor-service.component';

describe('ActivityMonitorServiceComponent', () => {
  let component: ActivityMonitorServiceComponent;
  let fixture: ComponentFixture<ActivityMonitorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityMonitorServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityMonitorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
