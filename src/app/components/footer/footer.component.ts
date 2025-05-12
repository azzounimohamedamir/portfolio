import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative py-12 bg-cover bg-center" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))">
      <div class="container mx-auto px-4 relative z-10">
        <div class="bg-white/5 backdrop-blur-lg rounded-lg p-8 max-w-6xl mx-auto border border-white/10">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-bold text-white mb-4">MOHAMED AMIR AZZOUNI</h3>
              <p class="text-gray-300">
                Ingénieur Système et Développeur Full Stack spécialisé en Angular, NestJS, et .NET Core.
              </p>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#home" class="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" class="text-gray-300 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" class="text-gray-300 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" class="text-gray-300 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" class="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-4">Connect</h3>
              <div class="flex space-x-4">
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-gray-300 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/mohamed-amir-azzouni-03ba15238" target="_blank" class="text-gray-300 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
                <a href="mailto:amirazz586@gmail.com" class="text-gray-300 hover:text-blue-400 transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 MOHAMED AMIR AZZOUNI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FooterComponent {}
