import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gad7QuizComponent } from './gad7-quiz.component';

describe('Gad7QuizComponent', () => {
  let component: Gad7QuizComponent;
  let fixture: ComponentFixture<Gad7QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gad7QuizComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Gad7QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
