import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Work Experience</h2>
        
        <div class="max-w-4xl mx-auto space-y-8">
          <!-- Full Stack Web Developer at HOLDING ACS -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Full Stack Web Developer</h3>
                <p class="text-blue-400">HOLDING ACS</p>
              </div>
              <p class="text-gray-300">Sep 2024 - Present</p>
            </div>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Développeur Full Stack spécialisé en NestJS / Angular pour le développement d'applications évolutives, la création d'API RESTful et l'architecture de microservices.</li>
              <li>Maîtrise de TypeORM, des tests, et du travail en équipe.</li>
              <li>Utiliser les frameworks NestJS et Angular pour développer, gérer et maintenir les aspects front-end et back-end de diverses applications web dynamiques.</li>
              <li>Mise en œuvre des mesures de sécurité et de protection des données avec NestJS tout en gérant le développement UI/UX avec Angular.</li>
            </ul>
          </div>

          <!-- Full Stack Web Developer at Holding Algeria Chemical Specialities -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Full Stack Web Developer (Détachement)</h3>
                <p class="text-blue-400">Holding Algeria Chemical Specialities</p>
              </div>
              <p class="text-gray-300">Mar 2024 - Present</p>
            </div>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Sous-traité par l'entreprise HOLDING ACS pour développer son Site web officiel.</li>
              <li>Développeur full-stack expérimenté spécialisé en Angular, NestJS et Laravel avec MySQL.</li>
              <li>Compétent dans la création d'applications web évolutives, d'API RESTful et l'optimisation des performances de bases de données.</li>
              <li>Fortes capacités de résolution de problèmes et d'esprit d'équipe.</li>
            </ul>
          </div>

          <!-- Full Stack Developer at G22 REI -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Full Stack Developer</h3>
                <p class="text-blue-400">G22 REI</p>
              </div>
              <p class="text-gray-300">Sep 2022 - Sep 2024</p>
            </div>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Développeur full stack expérimenté en API .NET Core et Angular (avec NGRX).</li>
              <li>Compétent dans la création d'architecture propre, la gestion d'état et les interactions avec les bases de données.</li>
              <li>Projets achevés comme Smart Restaurant et Smart Hôtel.</li>
            </ul>
          </div>

          <!-- Web Developer at ENAP -->
          <div class="bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-white">Web Developer</h3>
                <p class="text-blue-400">ENAP</p>
              </div>
              <p class="text-gray-300">Mar 2020 - Sep 2024</p>
            </div>
            <ul class="list-disc list-inside text-gray-300 space-y-2">
              <li>Développeur ASP.NET Core MVC expérimenté dans la création d'applications web évolutives.</li>
              <li>Expertise en C#, Entity Framework et intégration front-end.</li>
              <li>Implémenté des applications web dynamiques en utilisant ASP.NET MVC et RAZOR.</li>
              <li>Développé des applications web interactives pour une gamme de clients corporatifs.</li>
            </ul>
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
export class ExperienceComponent {}
