# Markdown Preview App (React + TypeScript)

## Project Description
The Markdown Preview App is a React + TypeScript application that allows users to write Markdown text and see a live HTML preview in real-time.
This project is a TypeScript conversion of my former Markdown Preview App built with JavaScript and React, refactored to improve type safety, maintainability, and developer experience while preserving the same core functionality and user experience.

# It supports:
- Side-by-side editor and preview on desktop, stacked layout for mobile.
- Real-time rendering of Markdown elements including headings, lists, code blocks, links, images, and bold/italic text.
- Syntax highlighting for code blocks.
- Save/load Markdown content using local storage or download/upload .md files.
- Light/dark theme toggle.
- Responsive and accessible UI structure.
   This project demonstrates modern React patterns, TypeScript integration, and component-based architecture.

# Features
- Markdown Editor: Type or paste Markdown with live preview.
- Preview Panel: Displays rendered HTML output with syntax highlighting.
- Local Storage Persistence: Automatically saves content across page reloads.
- File Operations: Save Markdown to .md file and load from a local .md file.
- Theme Toggle: Switch between light and dark mode.
- Responsive Layout: Optimized for both desktop and mobile screens.

# Installation and Setup
 - Prerequisites
   1. Node.js v18+
   2. npm installed

# Steps
- Clone the repository:git clone https://github.com/latifaib/markdown-preview-app-ts.git
cd markdown-preview-app-ts
- Install dependencies:npm install
- Run the development server:npm run dev
- Open the app in your browser at:http://localhost:5173

# Deployment Instructions
The app can be deployed using Netlify or any static hosting provider.
- Steps to deploy
1. Build the production version: npm run build
2. Deploy the generated dist folder to Netlify.
    Netlify automatically redeploys when the GitHub repository is updated.

# Available Scripts
- npm run dev — Starts the development server.
- npm run build — Builds production-ready files.
- npm run preview — Preview the production build locally.

# Technology Stack & Architecture
- Stack
1. React – Functional components and hooks.
2. TypeScript – Static typing and improved maintainability.
3. React Router – Client-side routing.
4. Vite – Fast development and build tool.
5. React Markdown + rehype-highlight – Markdown parsing and rendering.
6. Highlight.js – Syntax highlighting for code blocks.
7. Tailwind CSS – Styling and responsive layout.
8. Local Storage API – Content persistence.

# Architecture Decisions
- Editor and preview are separated into reusable components (Editor.tsx and Preview.tsx).
- Application routing and layout are managed in App.tsx.
- React hooks (useState, custom handlers) manage component state.
- File operations use the Blob and FileReader APIs for download and upload functionality.
- TypeScript interfaces and types are used to define component props and state clearly.

# Conversion Notes (JavaScript → TypeScript)
- All .jsx files were converted to .tsx.
- Component props and state were explicitly typed using TypeScript.
- React hooks were updated with proper generic types.
- CSS imports were handled using TypeScript module declarations.
- The overall application logic and UI behavior were preserved during the conversion.

# Known Issues / Limitations
- Syntax highlighting is limited to languages supported by Highlight.js.
- Theme preference is not yet persisted across sessions.
- Accessibility features can be further improved with additional testing.

# Future Improvements
- Persist theme preference in local storage.
- Drag-and-drop support for .md files.
- Undo/redo functionality in the editor.
- Improved keyboard navigation and ARIA landmark support.
- Optional API-based save/load for multiple Markdown documents.

# Submission Info
- GitHub Repository:https://github.com/latifaib/markdown-preview-app-ts
- Live App:https://markdown-preview-app-ts.netlify.app/
- Project Focus: JavaScript → TypeScript (React TS) conversion with responsive UI and component-based architecture