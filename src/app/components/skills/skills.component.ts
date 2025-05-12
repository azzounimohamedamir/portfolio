import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 animate-fade-in text-white">Skills & Technologies</h2>
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Angular
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  TypeScript
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  HTML/CSS
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  RAZOR
                </li>
              </ul>
            </div>

            <!-- Backend -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">Backend Development</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  NestJS
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  .NET Core API
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  ASP.NET MVC
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Clean Architecture
                </li>
              </ul>
            </div>

            <!-- Database -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">Database</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  SQL
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  MySQL
                </li>
              </ul>
            </div>

            <!-- Testing -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">Testing</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Karma
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Jest
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  NUnit
                </li>
              </ul>
            </div>

            <!-- DevOps & Tools -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">DevOps & Tools</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Git
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  GitLab
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Docker
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Kubernetes
                </li>
              </ul>
            </div>

            <!-- Professional Skills -->
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
              <h3 class="text-xl font-semibold mb-4 text-white">Professional Skills</h3>
              <ul class="space-y-3">
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Agile Development
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Problem Solving
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Team Work
                </li>
                <li class="flex items-center transition-all duration-200 hover:translate-x-2 text-gray-300">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Time Management
                </li>
              </ul>
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
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
  `]
})
export class SkillsComponent {}
