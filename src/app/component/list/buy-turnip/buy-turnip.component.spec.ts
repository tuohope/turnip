import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTurnipComponent } from './buy-turnip.component';

describe('BuyTurnipComponent', () => {
  let component: BuyTurnipComponent;
  let fixture: ComponentFixture<BuyTurnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTurnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTurnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
