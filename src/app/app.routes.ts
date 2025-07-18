import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { MoodTrackerComponent } from './components/moodtracker/mood-tracker.component';
import { JournalComponent } from './components/journal/journal.component';
import { ResourcesComponent } from './components/resources/resources.component';
import{QuizComponent}from './components/quiz/quiz.component'
import{Gad7QuizComponent} from './components/quiz/question/gad7-quiz/gad7-quiz.component'
import{PHQ9Component} from './components/quiz/question/phq9/phq9.component'

export const routes: Routes = [
     { path: '', component: LandingComponent },
  { path: 'mood-tracker', component: MoodTrackerComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'gad7', component: Gad7QuizComponent },
  { path: 'phq9', component: PHQ9Component },
  { path: 'resources', component: ResourcesComponent },
  { path: '**', redirectTo: '' }
];
