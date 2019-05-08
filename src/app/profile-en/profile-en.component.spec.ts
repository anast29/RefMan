import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEnComponent } from './profile-en.component';

describe('ProfileEnComponent', () => {
  let component: ProfileEnComponent;
  let fixture: ComponentFixture<ProfileEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
