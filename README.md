# Bakery Café Landing Page

A beautiful, modern, and responsive one-page landing page for a bakery café named 'Café De Travia, built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. The website showcases featured coffee, bread, and pastries in a clean, elegant interface optimized for both desktop and mobile devices.

## ✨ Features

* Responsive one-page layout
* Modern and minimal UI
* Featured menu items
* Smooth scrolling navigation
* Framer Motion animations
* Mobile-friendly navigation
* Reusable React components
* Built with TypeScript

---

## 🚀 Run Locally

### Prerequisites

* Node.js (v18 or later recommended)
* npm

### 1. Clone the repository

```bash
git clone H3IN-THANT/Cafe-De-Travia
cd Cafe-De-Travia
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add your Gemini API key:

```env
GEMINI_API_KEY=your_api_key_here
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🌐 Deploy on Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your project to GitHub.
2. Sign in to Vercel.
3. Click **New Project**.
4. Import your GitHub repository.
5. Vercel will automatically detect the Next.js project.
6. Add the following environment variable:

```text
GEMINI_API_KEY=your_api_key_here
```

7. Click **Deploy**.

Your application will be live in a few minutes.

---

### Option 2: Deploy using the Vercel CLI

Install the Vercel CLI:

```bash
npm install -g vercel
```

Login to your Vercel account:

```bash
vercel login
```

Deploy the project:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

If your application requires environment variables, add them either:

* From the Vercel Dashboard → **Settings → Environment Variables**
* Or using the CLI:

```bash
vercel env add GEMINI_API_KEY
```

---

## 🛠 Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React
* Google Gemini API

---

## 📁 Project Structure

```text
.
├── app/
├── components/
├── public/
├── styles/
├── .env.local
├── package.json
├── tailwind.config.ts
└── README.md
```

---

## 📄 Environment Variables

Create a `.env.local` file with:

```env
GEMINI_API_KEY=your_api_key_here
```

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
```

---

## 📌 Notes

* Never commit your `.env.local` file.
* Make sure `GEMINI_API_KEY` is configured before running or deploying the app.
* Vercel automatically builds and deploys every push to your main branch.

---

## 📜 License

This project is available for educational and personal use.

