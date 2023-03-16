import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prototipo_entrega_dispositivos-app';

  constructor(private renderer2: Renderer2, public _router: Router) { }

  // importar archivo (JS)
  ngOnInit() {
    const script = this.renderer2.createElement('script');
    script.src = '../assets/js/main.js';
    this.renderer2.appendChild(document.body, script);
  }

}
