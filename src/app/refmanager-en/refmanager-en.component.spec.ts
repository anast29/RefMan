import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefmanagerEnComponent } from './refmanager-en.component';

describe('RefmanagerEnComponent', () => {
  let component: RefmanagerEnComponent;
  let fixture: ComponentFixture<RefmanagerEnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefmanagerEnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefmanagerEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
