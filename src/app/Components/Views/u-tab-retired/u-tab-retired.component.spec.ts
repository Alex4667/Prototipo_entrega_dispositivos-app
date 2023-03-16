import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UTabRetiredComponent } from './u-tab-retired.component';

describe('UTabRetiredComponent', () => {
  let component: UTabRetiredComponent;
  let fixture: ComponentFixture<UTabRetiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UTabRetiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UTabRetiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
