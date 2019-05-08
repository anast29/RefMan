import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodscienceUaComponent } from './foodscience-ua.component';

describe('FoodscienceUaComponent', () => {
  let component: FoodscienceUaComponent;
  let fixture: ComponentFixture<FoodscienceUaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodscienceUaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodscienceUaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
