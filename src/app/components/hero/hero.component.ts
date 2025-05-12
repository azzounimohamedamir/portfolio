import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
           <span class="text-blue-500">Hi, I'm MOHAMED AMIR AZZOUNI</span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-300 mb-8">
          Ingénieur Système et Développeur Full Stack
        </h2>
        <p class="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Développeur Web Full Stack avec 6 ans d'expérience en développement front-end et back-end. 
          Compétent en PHP, JavaScript et C#. Maîtrise d'Angular, NestJS, Laravel et .NET Core, 
          spécialisé dans la création d'applications web dynamiques.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact" 
             class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Contact Me
          </a>
          <a href="#projects" 
             class="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
            View Projects
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeroComponent {}
