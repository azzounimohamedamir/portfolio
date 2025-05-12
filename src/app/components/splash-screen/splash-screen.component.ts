import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  template: `
    <div 
      class="fixed inset-0 bg-gradient-to-br from-white to-gray-100 z-50 flex items-center justify-center transition-all duration-700"
      [class.opacity-0]="!isVisible"
      [class.pointer-events-none]="!isVisible">
      <div class="text-center scale-animation">
        <div class="relative mb-8">
          <div class="text-8xl font-bold relative z-10 flex items-center justify-center space-x-2">
            <span class="text-black tracking-tight">MA</span>
            <span class="text-blue-600 animate-bounce">.</span>
          </div>
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        </div>
        <div class="flex flex-col items-center space-y-4">
          <div class="flex justify-center space-x-2">
            <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0s"></div>
            <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            <div class="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
          </div>
          <div class="text-gray-500 font-medium tracking-wider animate-pulse uppercase text-sm">
            Welcome to my Portfolio
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    @keyframes scaleIn {
      0% {
        transform: scale(0.9);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    .scale-animation {
      animation: scaleIn 0.5s ease-out forwards;
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `]
})
export class SplashScreenComponent implements OnInit {
  isVisible = true;

  ngOnInit() {
    // Hide splash screen after 2.5 seconds with a smooth transition
    setTimeout(() => {
      this.isVisible = false;
    }, 2500);
  }
}
