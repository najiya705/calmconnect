import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHQ9Component } from './phq9.component';

describe('PHQ9Component', () => {
  let component: PHQ9Component;
  let fixture: ComponentFixture<PHQ9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PHQ9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PHQ9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
