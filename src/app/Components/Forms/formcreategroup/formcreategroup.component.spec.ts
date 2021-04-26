import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcreategroupComponent } from './formcreategroup.component';

describe('FormcreategroupComponent', () => {
  let component: FormcreategroupComponent;
  let fixture: ComponentFixture<FormcreategroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcreategroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcreategroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
