import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefmanagerUaComponent } from './refmanager-ua.component';

describe('RefmanagerUaComponent', () => {
  let component: RefmanagerUaComponent;
  let fixture: ComponentFixture<RefmanagerUaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefmanagerUaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefmanagerUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
