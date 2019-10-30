import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseItemComponent } from './morse-item.component';

describe('MorseItemComponent', () => {
  let component: MorseItemComponent;
  let fixture: ComponentFixture<MorseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
