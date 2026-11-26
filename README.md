# Michelle Anorchie – Model Portfolio

A modern, responsive modelling portfolio website designed to showcase professional modelling photographs, personal profile information, measurements, and contact details.

- **Live Website:** [model-portfolio-coral.vercel.app](https://model-portfolio-coral.vercel.app/)
- **Repository:** [GitHub – ModelPortfolio](https://github.com/MichelleAnorchie/ModelPortfolio)

---

## Project Overview

**ModelPortfolio** is a personal modelling portfolio website developed to provide a professional online presence for model Michelle Anorchie.

The website combines an elegant editorial-inspired design with interactive components, responsive layouts, image optimisation, and downloadable PDF functionality. The project was developed as a full front-end web application, with an emphasis on visual presentation, usability, responsive design, and performance.

---

## Features

### 1. Responsive Design
- Responsive layouts for desktop, tablet, and mobile devices.
- Mobile-friendly navigation menu.
- Consistent visual presentation across screen sizes.

### 2. Interactive Portfolio Gallery
- Dedicated **Beauty**, **Full-body**, and **Digitals** categories.
- Category-based image filtering.
- Full-screen image viewer (lightbox) with previous and next image navigation.
- Smooth transitions and hover animations.

### 3. Model Profile
- Dedicated model information section.
- Height and body measurements.
- Dress and shoe sizes.
- Location information.

### 4. Downloadable Comp Card
- Generates a two-page PDF comp card.
- Includes selected modelling photographs.
- Displays model measurements and contact information.
- Allows visitors to download the document directly from the website.

### 5. About and Contact Sections
- Personal introduction and professional modelling categories.
- Direct email contact.
- Instagram profile link.

### 6. Performance and User Experience
- Optimised WebP images and lazy loading for gallery images.
- Smooth scrolling and animations.
- Custom favicon and SEO metadata.

---

## Screenshots

### Full Website

![Full Website Screenshot](screenshots/full-page-website.png)
---

## Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React** | Component-based user interface |
| **TypeScript** | Type safety and maintainable code |
| **Vite** | Development server and build tool |
| **CSS3** | Styling and responsive layouts |
| **Motion** | UI animations and transitions |
| **Lucide React** | Interface icons |
| **jsPDF** | PDF comp card generation |
| **Sharp** | Image optimisation |
| **Vercel** | Application deployment |
| **Git & GitHub** | Version control and source code management |

---

## Design Approach

The website follows a **dark luxury editorial aesthetic** inspired by modern fashion and modelling portfolios.

**Visual Direction:**
- Black backgrounds with champagne-gold accents.
- Elegant serif typography.
- Minimal layouts with generous spacing.
- Subtle transitions and animations.

The design prioritises the photography while keeping navigation and model information easily accessible.

---

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites
- Node.js
- npm
- Git

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MichelleAnorchie/ModelPortfolio.git
   ```

2. **Navigate into the project directory**
   ```bash
   cd ModelPortfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   *Open the local URL displayed in your terminal to view the application.*

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## Project Structure

```text
ModelPortfolio/
│
├── public/
│   ├── images/
│   │   ├── beauty/
│   │   ├── digitals/
│   │   └── full-body/
│   │
│   ├── images-optimized/
│   │   ├── beauty/
│   │   ├── digitals/
│   │   └── full-body/
│   │
│   ├── favicon.svg
│   └── icons.svg
│
├── scripts/
│   └── optimize-images.mjs
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── About.tsx
│   │   ├── CompCard.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ModelProfile.tsx
│   │   ├── Navbar.tsx
│   │   ├── Gallery.tsx
│   │   └── Gallery.css
│   │
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

---

## Deployment

The application is deployed using **Vercel** and connected directly to the GitHub repository. Changes pushed to the configured deployment branch automatically trigger new deployments.

- **Live Application:** [https://model-portfolio-coral.vercel.app/](https://model-portfolio-coral.vercel.app/)

---

## Future Improvements

Potential future enhancements include:
- Additional portfolio categories.
- Improved accessibility and keyboard navigation.
- Further performance optimisation.
- Additional interactive portfolio features.
- Enhanced PDF comp card customisation.

---

## Author

**Michelle Anorchie**
- **GitHub:** [@MichelleAnorchie](https://github.com/MichelleAnorchie)
- **Instagram:** [@mimy_michelle](https://instagram.com/mimy_michelle)

---

*Developed as a personal modelling portfolio and front-end development project.*