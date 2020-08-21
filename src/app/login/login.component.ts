import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(
      document.body,
      'background',
      'linear-gradient(90deg, rgba(1,219,223,1) 0%, rgba(122,113,238,1) 50%, rgba(251,0,255,1) 100%)'
    );
  }

  ngOnInit(): void {}
}
