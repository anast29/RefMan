import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersUaComponent } from './papers-ua.component';

describe('PapersUaComponent', () => {
  let component: PapersUaComponent;
  let fixture: ComponentFixture<PapersUaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersUaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
