import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverReportPage } from './driver-report.page';

describe('DriverReportPage', () => {
  let component: DriverReportPage;
  let fixture: ComponentFixture<DriverReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DriverReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
