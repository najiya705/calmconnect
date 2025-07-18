import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})

export class QuizComponent {

}
