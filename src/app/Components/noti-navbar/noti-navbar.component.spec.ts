import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotiNavbarComponent } from './noti-navbar.component';

describe('NotiNavbarComponent', () => {
  let component: NotiNavbarComponent;
  let fixture: ComponentFixture<NotiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotiNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
