import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserReportPage } from './user-report.page';

describe('UserReportPage', () => {
  let component: UserReportPage;
  let fixture: ComponentFixture<UserReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
