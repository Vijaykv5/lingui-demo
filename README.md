# Simple React Project with TypeScript and Lingui

This is a modern React application built with Vite, TypeScript, and Lingui for internationalization. The project uses Tailwind CSS for styling.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install dependencies:
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

## Available Scripts

In the project directory, you can run:

### Development
```bash
npm run dev
# or
yarn dev
```
This runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build
```bash
npm run build
# or
yarn build
```
Builds the app for production to the `dist` folder.

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```
Locally preview the production build.

### Internationalization
```bash
# Extract messages
npm run messages:extract
# or
yarn messages:extract

# Compile messages
npm run messages:compile
# or
yarn messages:compile
```


## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Lingui](https://lingui.dev/) - Internationalization
- [Tailwind CSS](https://tailwindcss.com/) - Styling
