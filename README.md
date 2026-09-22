# Hero App

A modern app discovery and installation platform built with Next.js. Users can browse applications, view app details, install apps, manage installed apps, sort them by size or rating, and uninstall them when needed.

![Hero App Screenshot](./public/hero-app-screenshot.png)

> Replace the screenshot path above with your actual project screenshot.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- Vercel

## Key Features

- Browse and explore available applications
- View individual app details
- Install apps and manage them from the Installed Apps page
- Uninstall installed applications
- Sort installed apps by size or rating
- Dynamic app count display
- Custom 404 page for invalid routes
- Responsive design for mobile, tablet, and desktop devices
- Fresh data fetching with environment variable support

## Dependencies

```json
{
  "next": "latest",
  "react": "latest",
  "react-dom": "latest",
  "react-icons": "latest",
  "tailwindcss": "latest",
  "daisyui": "latest"
}
```

## Run Locally

Clone the project:

```bash
git clone <your-repository-url>
```

Go to the project directory:

```bash
cd hero-app
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Live Website

[Visit Hero App](https://hero-app-sage.vercel.app/)

## Relevant Links

- [Source Code](https://github.com/DevMohim/hero-app)
- [Live Demo](https://hero-app-sage.vercel.app/)
- [Vercel Deployment](https://vercel.com)
