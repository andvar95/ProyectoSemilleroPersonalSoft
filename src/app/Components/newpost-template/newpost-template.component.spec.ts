import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostTemplateComponent } from './newpost-template.component';

describe('NewpostTemplateComponent', () => {
  let component: NewpostTemplateComponent;
  let fixture: ComponentFixture<NewpostTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpostTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpostTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
