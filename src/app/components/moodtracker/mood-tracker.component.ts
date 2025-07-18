import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mood-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.scss']
})
export class MoodTrackerComponent implements OnInit {
  moods = [
    { label: '😊 Happy', value: '😊' },
    { label: '😢 Sad', value: '😢' },
    { label: '😡 Angry', value: '😡' },
    { label: '😨 Anxious', value: '😨' },
    { label: '😌 Relaxed', value: '😌' },
    { label: '😐 Neutral', value: '😐' }
  ];

  selectedMood: string = '';
  moodNote: string = '';
  moodHistory: { date: string; mood: string; note?: string }[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('calmconnect-moods');
    this.moodHistory = saved ? JSON.parse(saved) : [];
  }

  saveMood() {
    if (!this.selectedMood) return;

    const newEntry = {
      date: new Date().toLocaleString(), // Includes full timestamp
      mood: this.selectedMood,
      note: this.moodNote.trim() || undefined
    };

    this.moodHistory.unshift(newEntry);
    localStorage.setItem('calmconnect-moods', JSON.stringify(this.moodHistory));

    this.selectedMood = '';
    this.moodNote = '';
  }
}
