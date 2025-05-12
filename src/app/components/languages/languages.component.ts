import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  template: `
    <section id="languages" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Langues</h2>
        
        <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <!-- French -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2 text-white">Français</h3>
              <p class="text-gray-300">Courant</p>
              <div class="mt-4 h-2 bg-gray-700 rounded-full">
                <div class="h-full bg-blue-500 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>

          <!-- Arabic -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2 text-white">Arab</h3>
              <p class="text-gray-300">Native</p>
              <div class="mt-4 h-2 bg-gray-700 rounded-full">
                <div class="h-full bg-blue-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>

          <!-- English -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="text-center">
              <h3 class="text-xl font-bold mb-2 text-white">Anglais</h3>
              <p class="text-gray-300">Technique</p>
              <div class="mt-4 h-2 bg-gray-700 rounded-full">
                <div class="h-full bg-blue-500 rounded-full w-[75%]"></div>
              </div>
            </div>
          </div>
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
export class LanguagesComponent {}
