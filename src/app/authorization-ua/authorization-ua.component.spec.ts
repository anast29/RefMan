import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationUaComponent } from './authorization-ua.component';

describe('RegistrationUaComponent', () => {
  let component: RegistrationUaComponent;
  let fixture: ComponentFixture<RegistrationUaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationUaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
