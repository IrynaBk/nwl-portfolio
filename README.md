# Modern Portfolio Website

A modern, brutalist-style portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Smooth animations and transitions
- Interactive components
- Dark mode support
- Minimalistic and modern UI

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM

## Getting Started

### Prerequisites

- Node.js 20.19.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio_app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects section
│   └── Certifications.tsx # Certifications section
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind CSS
```

## Customization

### Colors

The main colors are defined in `tailwind.config.js`:
- Deep Purple: #320c35
- Cream Beige: #f2eebf

To modify the color scheme, update the colors in the `tailwind.config.js` file.

### Content

Update the following files to customize the content:
- `components/Hero.tsx` - Update personal information
- `components/Experience.tsx` - Modify work experience
- `components/Projects.tsx` - Add/remove projects
- `components/Certifications.tsx` - Update certifications

## License

This project is licensed under the MIT License.
