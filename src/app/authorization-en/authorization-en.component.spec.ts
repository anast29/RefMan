import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationEnComponent } from './authorization-en.component';

describe('AuthorizationEnComponent', () => {
  let component: AuthorizationEnComponent;
  let fixture: ComponentFixture<AuthorizationEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
