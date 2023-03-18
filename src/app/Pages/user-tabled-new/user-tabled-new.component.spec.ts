import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTabledNewComponent } from './user-tabled-new.component';

describe('UserTabledNewComponent', () => {
  let component: UserTabledNewComponent;
  let fixture: ComponentFixture<UserTabledNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabledNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTabledNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
