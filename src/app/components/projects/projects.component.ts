import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white animate-fade-in">Featured Projects</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
           <!-- Project 1 -->
           <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
             <div class="relative h-48 bg-gradient-to-r from-blue-500 to-blue-700">
               <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">ACS</div>
             </div>
             <div class="p-6">
               <h3 class="text-xl font-semibold mb-2 text-white">Site web officiel de HOLDING ACS</h3>
               <p class="text-gray-300 mb-4">
                 Développement du Site officiel de l'entreprise Holding ACS.
               </p>
               <div class="flex flex-wrap gap-2 mb-4">
                 <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Angular</span>
                 <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">NestJS</span>
                 <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">REST API</span>
               </div>
               <div class="flex gap-4">
                 <a href="https://amirazzouni.netlify.app" target="_blank" class="text-blue-300 hover:text-blue-500">Live Demo</a>
                 <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-blue-300 hover:text-blue-500">Source Code</a>
               </div>
             </div>
           </div>

          <!-- Project 2 -->
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="relative h-48 bg-gradient-to-r from-green-500 to-green-700">
              <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">SCANHOSP</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-white">SCANHOSP (SMART HOTEL, RESTAURANT, CATERING)</h3>
              <p class="text-gray-300 mb-4">
                Plateforme pour la gestion moderne des hôpitaux, centralisant la réservation, l'accueil et la gestion des revenus.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">.NET Core API</span>
                <span class="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">NGRX</span>
              </div>
              <div class="flex gap-4">
                <a href="https://scanhosp.dz" target="_blank" class="text-green-300 hover:text-green-500">Live Demo</a>
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-green-300 hover:text-green-500">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="relative h-48 bg-gradient-to-r from-purple-500 to-purple-700">
              <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">EASY STOCK</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-white">EASY STOCK</h3>
              <p class="text-gray-300 mb-4">
                Application de gestion commerciale personnelle, un mini ERP, qui gère tous les processus commerciaux et de gestion des stocks.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">NestJS</span>
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">MySQL</span>
              </div>
              <div class="flex gap-4">
                <a href="https://amirazzouni.netlify.app" target="_blank" class="text-purple-300 hover:text-purple-500">Live Demo</a>
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-purple-300 hover:text-purple-500">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="relative h-48 bg-gradient-to-r from-red-500 to-red-700">
              <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">SMART SCHOOL</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-white">SMART SCHOOL</h3>
              <p class="text-gray-300 mb-4">
                Application web pour la gestion des écoles, incluant la gestion des élèves, des enseignants, des notes et des paiements.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">ASP.NET Core</span>
                <span class="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">SQL Server</span>
              </div>
              <div class="flex gap-4">
                <a href="#" target="_blank" class="text-red-300 hover:text-red-500">Live Demo</a>
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-red-300 hover:text-red-500">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project 5 -->
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="relative h-48 bg-gradient-to-r from-yellow-500 to-yellow-700">
              <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">SMART CLINIC</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-white">SMART CLINIC</h3>
              <p class="text-gray-300 mb-4">
                Application de gestion des cliniques médicales avec gestion des rendez-vous, des patients et des consultations.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">NestJS</span>
                <span class="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">PostgreSQL</span>
              </div>
              <div class="flex gap-4">
                <a href="#" target="_blank" class="text-yellow-300 hover:text-yellow-500">Live Demo</a>
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-yellow-300 hover:text-yellow-500">Source Code</a>
              </div>
            </div>
          </div>

          <!-- Project 6 -->
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="relative h-48 bg-gradient-to-r from-indigo-500 to-indigo-700">
              <div class="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-20">SMART DELIVERY</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-white">SMART DELIVERY</h3>
              <p class="text-gray-300 mb-4">
                Application de livraison avec suivi en temps réel des commandes et gestion des livreurs.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Angular</span>
                <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">.NET Core</span>
                <span class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">SignalR</span>
              </div>
              <div class="flex gap-4">
                <a href="#" target="_blank" class="text-indigo-300 hover:text-indigo-500">Live Demo</a>
                <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-indigo-300 hover:text-indigo-500">Source Code</a>
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
export class ProjectsComponent {}
