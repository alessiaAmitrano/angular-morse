import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextPageComponent } from './input-text-page.component';

describe('InputTextPageComponent', () => {
  let component: InputTextPageComponent;
  let fixture: ComponentFixture<InputTextPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
