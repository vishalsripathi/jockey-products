import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  isValidFormSubmitted = null;
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(
      document.body,
      'background',
      'linear-gradient(90deg, rgba(1,219,223,1) 0%, rgba(122,113,238,1) 50%, rgba(251,0,255,1) 100%)'
    );
  }

  onSubmit(form) {
    localStorage.setItem('Name', form.form.value['username']);
    localStorage.setItem('Email', form.form.value['email']);
    localStorage.setItem('Mobile Number', form.form.value['number']);
    localStorage.setItem('Feedback', form.form.value['textarea']);
    this.isValidFormSubmitted = false;
    if (form.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    form.reset();
  }

  ngOnInit(): void {}
}
