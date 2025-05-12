import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
    <section id="education" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Education & Certifications</h2>
        
        <div class="max-w-4xl mx-auto">
          <!-- Education -->
          <div class="mb-12">
            <h3 class="text-2xl font-semibold mb-6 text-white">Formation</h3>
            <div class="space-y-6">
              <!-- INIM UMBB BOUMERDES FACULTY -->
              <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h4 class="text-xl font-bold text-white">MASTER 2 INGENERIE DE LOGICIEL ET TRAITEMENT DE L'INFORMATION (ILTI)</h4>
                    <p class="text-blue-400">INIM UMBB BOUMERDES FACULTY</p>
                  </div>
                  <div class="text-right">
                    <p class="text-gray-300">Sep 2017 - Jun 2019</p>
                    <p class="text-blue-400 font-semibold">GPA: 17</p>
                  </div>
                </div>
              </div>

              <!-- INIM UMBB BOUMERDES -->
              <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h4 class="text-xl font-bold text-white">License SYSTEME INFORMATIQUE</h4>
                    <p class="text-blue-400">INIM UMBB BOUMERDES</p>
                  </div>
                  <div class="text-right">
                    <p class="text-gray-300">Sep 2014 - Jun 2017</p>
                    <p class="text-blue-400 font-semibold">GPA: 17</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="mt-16">
            <h3 class="text-2xl font-semibold mb-6 text-white">Certifications</h3>
            <div class="space-y-6">
              <!-- Système et Reseau Informatique -->
              <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-xl font-bold text-white">Système et Reseau Informatique</h4>
                    <p class="text-blue-400">ISGP (Suprior Planification & Control Institut)</p>
                  </div>
                  <p class="text-gray-300">Nov 2024</p>
                </div>
              </div>

              <!-- Certificat en Asp.net Core -->
              <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-xl font-bold text-white">Certificat en Asp.net Core</h4>
                    <p class="text-blue-400">Royal School Bab ezzouar Algeria</p>
                  </div>
                  <p class="text-gray-300">Sep 2022</p>
                </div>
              </div>

              <!-- Force de Vente et Marketing -->
              <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="text-xl font-bold text-white">Force de Vente et Marketing</h4>
                    <p class="text-blue-400">Royal School</p>
                  </div>
                  <p class="text-gray-300">Sep 2021</p>
                </div>
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
export class EducationComponent {}
