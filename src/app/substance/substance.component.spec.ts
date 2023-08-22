import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstanceComponent } from './substance.component';

describe('SubstanceComponent', () => {
  let component: SubstanceComponent;
  let fixture: ComponentFixture<SubstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
