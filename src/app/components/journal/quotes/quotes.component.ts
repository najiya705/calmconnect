import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {
 quotes = [
    '🌟 You are stronger than you think.',
    '💭 It is okay to not be okay.',
    '🌈 Every day is a second chance.',
    '📞 Need help? Call: 1800-599-0019',
    '🧠 Mental health is health.',
    '🌸 Breathe. You got this.'
  ];
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.quotes.length;
    }, 4000);
  }
}
