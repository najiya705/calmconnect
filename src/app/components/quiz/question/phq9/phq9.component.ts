import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phq9',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './phq9.component.html',
  styleUrl: './phq9.component.css'
})
export class PHQ9Component {
questions = [
    'Little interest or pleasure in doing things',
    'Feeling down, depressed, or hopeless',
    'Trouble falling or staying asleep, or sleeping too much',
    'Feeling tired or having little energy',
    'Poor appetite or overeating',
    'Feeling bad about yourself — or that you are a failure or have let yourself or your family down',
    'Trouble concentrating on things, such as reading the newspaper or watching television',
    'Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual',
    'Thoughts that you would be better off dead or of hurting yourself in some way'
  ];

  options = [
    { label: 'Not at all', value: 0 },
    { label: 'Several days', value: 1 },
    { label: 'More than half the days', value: 2 },
    { label: 'Nearly every day', value: 3 }
  ];

  answers: (number | null)[] = Array(this.questions.length).fill(null);
  submitted = false;
  totalScore = 0;
  resultMessage = '';

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
    if (score <= 4) return 'Minimal depression';
    if (score <= 9) return 'Mild depression';
    if (score <= 14) return 'Moderate depression';
    if (score <= 19) return 'Moderately severe depression';
    return 'Severe depression';
  }

  resetQuiz() {
    this.answers = Array(this.questions.length).fill(null);
    this.submitted = false;
    this.totalScore = 0;
    this.resultMessage = '';
  }
}
