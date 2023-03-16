import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRetiredComponent } from './user-retired.component';

describe('UserRetiredComponent', () => {
  let component: UserRetiredComponent;
  let fixture: ComponentFixture<UserRetiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRetiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRetiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
