import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HidlinkConnectPage } from './hidlink-connect.page';

describe('HidlinkConnectPage', () => {
  let component: HidlinkConnectPage;
  let fixture: ComponentFixture<HidlinkConnectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HidlinkConnectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
