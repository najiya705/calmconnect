import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import{ QuotesComponent} from '../journal/quotes/quotes.component'
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,QuotesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
   constructor(private router: Router) {}
    navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
