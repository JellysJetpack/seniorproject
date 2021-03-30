import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsrComponent } from './osr.component';

describe('OsrComponent', () => {
  let component: OsrComponent;
  let fixture: ComponentFixture<OsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
