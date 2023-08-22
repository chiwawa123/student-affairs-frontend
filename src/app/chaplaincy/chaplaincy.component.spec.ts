import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaplaincyComponent } from './chaplaincy.component';

describe('ChaplaincyComponent', () => {
  let component: ChaplaincyComponent;
  let fixture: ComponentFixture<ChaplaincyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaplaincyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaplaincyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
