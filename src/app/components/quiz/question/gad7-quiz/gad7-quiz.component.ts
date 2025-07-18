import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-gad7-quiz',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gad7-quiz.component.html',
  styleUrl: './gad7-quiz.component.css'
})
export class Gad7QuizComponent {
 questions = [
    'Feeling nervous, anxious, or on edge',
    'Not being able to stop or control worrying',
    'Worrying too much about different things',
    'Trouble relaxing',
    'Being so restless that it’s hard to sit still',
    'Becoming easily annoyed or irritable',
    'Feeling afraid as if something awful might happen'
  ];

  options = [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'More than half the days', value: 2 },
    { label: 'Nearly every day', value: 3 }
  ];


  submitted = false;
  totalScore = 0;
  resultMessage = '';

answers: (number | null)[] = Array(this.questions.length).fill(null);

submitQuiz() {
  if (this.answers.includes(null)) {
    alert('Please answer all questions before submitting.');
    return;
  }

  this.totalScore = this.answers.reduce(
    (acc: number, val: number | null) => acc + (val ?? 0),
    0
  );

  this.resultMessage = this.getResultMessage(this.totalScore);
  this.submitted = true;
}


  getResultMessage(score: number): string {
    if (score <= 4) return 'Minimal anxiety';
    if (score <= 9) return 'Mild anxiety';
    if (score <= 14) return 'Moderate anxiety';
    return 'Severe anxiety';
  }

  resetQuiz() {
    this.answers = Array(this.questions.length).fill(null);
    this.submitted = false;
    this.totalScore = 0;
    this.resultMessage = '';
  }
}
