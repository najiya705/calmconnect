import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent {
indiaResources = [
    {
      name: 'iCall – TISS',
      type: 'Free Counselling Service',
      description: 'Confidential mental health support via call or email by TISS.',
      link: 'https://icallhelpline.org'
    },
    {
      name: 'Vandrevala Foundation Helpline',
      type: '24x7 Helpline',
      description: 'Professional emotional support in multiple Indian languages.',
      link: 'https://www.vandrevalafoundation.com'
    },
    {
      name: 'AASRA',
      type: 'Suicide Prevention Helpline',
      description: 'Helpline for those in emotional distress, available 24x7.',
      link: 'http://www.aasra.info'
    },
    {
      name: 'Mann Talks – Live Love Laugh',
      type: 'Helpline & Awareness',
      description: 'Mental health awareness and support by Deepika Padukone’s NGO.',
      link: 'https://thelivelovelaughfoundation.org'
    },
    {
      name: 'Fortis Mental Health',
      type: 'Therapists & Articles',
      description: 'Mental health professionals directory and educational content.',
      link: 'https://www.fortishealthcare.com/fortismentalhealth'
    },
    {
      name: 'Mind Clan',
      type: 'Inclusive Therapist Directory',
      description: 'Verified and inclusive mental health professionals across India.',
      link: 'https://themindclan.com'
    },
    {
      name: 'Arogya Setu Mental Health',
      type: 'Government Support',
      description: 'Government-supported mental health resources through Arogya Setu.',
      link: 'https://www.mohfw.gov.in'
    },
    {
      name: 'NIMHANS',
      type: 'National Institute',
      description: 'Leading government institute offering tele-counselling & treatment.',
      link: 'https://nimhans.ac.in'
    }
  ];
}
