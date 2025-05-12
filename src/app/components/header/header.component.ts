import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-xl font-bold">Portfolio</div>
        <ul class="hidden md:flex space-x-8">
          <li><a href="#home" class="hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" class="hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#skills" class="hover:text-blue-600 transition-colors">Skills</a></li>
          <li><a href="#projects" class="hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
        <button class="md:hidden" (click)="toggleMenu()">
          <span class="block w-6 h-0.5 bg-black mb-1"></span>
          <span class="block w-6 h-0.5 bg-black mb-1"></span>
          <span class="block w-6 h-0.5 bg-black"></span>
        </button>
      </nav>
      <div *ngIf="isMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white border-b">
        <ul class="container mx-auto px-4 py-4 space-y-4">
          <li><a href="#home" class="block hover:text-blue-600 transition-colors">Home</a></li>
          <li><a href="#about" class="block hover:text-blue-600 transition-colors">About</a></li>
          <li><a href="#skills" class="block hover:text-blue-600 transition-colors">Skills</a></li>
          <li><a href="#projects" class="block hover:text-blue-600 transition-colors">Projects</a></li>
          <li><a href="#contact" class="block hover:text-blue-600 transition-colors">Contact</a></li>
        </ul>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
