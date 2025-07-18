import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-journal',
  standalone: true, // ✅ Add this
  imports: [FormsModule,CommonModule], // ✅ This is now valid
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  entryText: string = '';
  entries: { date: string; text: string }[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem('calmconnect-journal');
    this.entries = saved ? JSON.parse(saved) : [];
  }

  saveEntry() {
    if (!this.entryText.trim()) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      text: this.entryText.trim()
    };

    this.entries.unshift(newEntry);
    localStorage.setItem('calmconnect-journal', JSON.stringify(this.entries));
    this.entryText = '';
  }
}
