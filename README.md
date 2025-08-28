# Youssef Elsabawy Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org/), TypeScript, and Tailwind CSS.

## Features

- Responsive design
- Hero section with profile image and bio
- Projects showcase
- Resume section
- About page
- API routes
- UI components

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Yelsabawyy/Personal-Website.git
   cd Personal-Website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Update your personal data:**
   - Edit the file at `data/site-data.json` and replace the example data with your own information (name, bio, images, etc.).

4. **Configure environment variables:**
   - Copy `.env.local.example` to `.env.local` (if available) and update the values to match your setup.

### Development

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Project Structure

- `app/` – Main application pages and components
- `components/` – Reusable UI components
- `data/` – Static data (JSON, etc.)
- `lib/` – Utility libraries
- `public/` – Static assets
- `.next/` – Build output (generated)
- `README.md` – Project documentation

## Deployment

You can deploy this project on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is licensed under the MIT License.

---

Feel free to contribute or open issues!