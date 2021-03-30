import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdtrackComponent } from './prodtrack.component';

describe('ProdtrackComponent', () => {
  let component: ProdtrackComponent;
  let fixture: ComponentFixture<ProdtrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdtrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
