import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="relative py-20 bg-cover bg-center bg-fixed" 
      style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1920&auto=format&fit=crop')">
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="bg-white/10 backdrop-blur-lg rounded-lg shadow-lg p-8 border border-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  class="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div class="mt-12 grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <h3 class="text-lg font-semibold mb-2">Email</h3>
              <p>amirazz586&#64;gmail.com</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Phone</h3>
              <p>+213561596837</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2">Location</h3>
              <p>Algeria</p>
            </div>
          </div>
          <div class="mt-8 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/mohamed-amir-azzouni-03ba15238" target="_blank" class="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href="https://amirazzouni.netlify.app" target="_blank" class="text-white hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="https://github.com/azzounimohamedamir" target="_blank" class="text-white hover:text-blue-400 transition-colors">GitHub</a>
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
export class ContactComponent {}
