import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        <div class="max-w-5xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="space-y-4">
              <p class="text-lg text-gray-300 leading-relaxed">
                Développeur Web Full Stack avec une solide expérience dans le développement d'applications web évolutives. 
                Actuellement chez HOLDING ACS, je me spécialise dans le développement NestJS/Angular et la création d'API RESTful.
              </p>
              <p class="text-lg text-gray-300 leading-relaxed">
                Mon expertise couvre l'ensemble du stack technique, de la conception d'interfaces utilisateur à 
                l'architecture de microservices, en passant par la gestion de bases de données et la sécurité des applications.
              </p>
              <div class="space-y-4">
                <h3 class="text-xl font-semibold text-white">Formation et Certifications:</h3>
                <ul class="list-disc list-inside space-y-3 text-gray-300">
                  <li>🎓 Master 2 ILTI - INIM UMBB BOUMERDES (GPA: 17)</li>
                  <li>🎓 License Système Informatique - INIM UMBB BOUMERDES</li>
                  <li>📜 Certificat en ASP.NET Core - Royal School</li>
                  <li>📜 Système et Réseau Informatique - ISGP</li>
                </ul>
              </div>
            </div>
            <div class="relative p-6">
              <div class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <div class="text-center text-white">
                  <div class="text-6xl font-bold mb-2">6+</div>
                  <div class="text-xl mb-6">Years of Experience</div>
                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center">
                      <div class="text-3xl font-bold mb-1">20+</div>
                      <div class="text-sm text-gray-200">Projects Completed</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold mb-1">10+</div>
                      <div class="text-sm text-gray-200">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl -z-10"></div>
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
export class AboutComponent {}
