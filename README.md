# Angular Portfolio

A modern, responsive portfolio website built with Angular and Tailwind CSS, featuring glass-morphism design and smooth animations.

## Live Demo

Visit the live portfolio at: [https://azzounimohamedamir.github.io/angular-portfolio/](https://azzounimohamedamir.github.io/angular-portfolio/)

## Features

- Modern glass-morphism design
- Responsive layout for all devices
- Smooth animations and transitions
- Sections for:
  - About
  - Skills
  - Experience
  - Education
  - Projects
  - Languages
  - Contact

## Technologies Used

- Angular 16+
- Tailwind CSS
- TypeScript
- Angular CLI
- GitHub Pages

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/azzounimohamedamir/angular-portfolio.git
```

2. Install dependencies:
```bash
cd angular-portfolio
npm install
```

3. Run the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Deployment

The portfolio is automatically deployed to GitHub Pages using the gh-pages branch. To deploy new changes:

1. Build the project:
```bash
ng build --configuration production --base-href "https://azzounimohamedamir.github.io/angular-portfolio/"
```

2. Deploy to GitHub Pages:
```bash
npx angular-cli-ghpages --dir=dist/angular-portfolio
```

## License

MIT License
