import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellTurnipComponent } from './sell-turnip.component';

describe('SellTurnipComponent', () => {
  let component: SellTurnipComponent;
  let fixture: ComponentFixture<SellTurnipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellTurnipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellTurnipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
