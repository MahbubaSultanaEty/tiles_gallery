# 🧱 Tiles Gallery

A modern and aesthetic tile showcase web application built with Next.js, designed to explore premium ceramic, marble, porcelain, and designer tile collections with an elegant user experience.

## 🌐 Live Website

https://tiles-gallery-rho.vercel.app/my-profile

---

## 👩‍💻 Author

**Mahbuba Sultana**

---

## 📌 Project Overview

Tiles Gallery is a fully responsive web application where users can browse luxury tile collections, explore detailed tile information, search tiles by title, and manage their own profiles securely through authentication. The website focuses on clean UI design, smooth interactions, and modern web technologies.

---

## ✨ Key Features

* 🔐 Authentication system using BetterAuth
* 🔑 Google Sign-In functionality
* 👤 Private Routes protection
* 🏠 Responsive Home Page with premium banner section
* 🧱 Featured Tiles showcase
* 🔎 Search functionality on All Tiles page
* 📄 Dynamic Tile Details page
* 👤 My Profile page for logged-in users
* ✏️ Update user name and profile image feature
* 🎞️ Lottie animation integration
* 🎠 Swiper slider integration
* 📱 Fully responsive for mobile, tablet, and desktop
* 🚫 Custom Not Found page implementation
* ⚡ Smooth hover effects and transitions
* 🎨 Unique banner design created using Canva and Google-sourced assets

---

## 🔒 Route Access

### Public Routes

* `/`
* `/all-tiles`
* `/login`
* `/register`

### Private Routes

Only logged-in users can access:

* `/all-tiles/[id]`
* `/my-profile`

---

## 🛠️ Technologies Used

### Frontend

* Next.js (App Router)
* React
* Tailwind CSS
* DaisyUI
* HeroUI

### Authentication

* BetterAuth
* Google OAuth

### Database

* MongoDB

### Animation & UI Libraries

* SwiperJS
* LottieFiles
* React Icons
* Lucide React

### Deployment

* Vercel

---

## 📦 NPM Packages Used

```bash
next
react
tailwindcss
daisyui
@heroui/react
better-auth
mongodb
swiper
lottie-react
react-icons
lucide-react
sonner
```

---

## 🚀 Installation & Setup

Clone the project:

```bash
git clone https://github.com/your-github-username/tiles-gallery.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_uri
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🎨 Design Credits

* Banner inspiration and assets collected from Google Images
* Banner compositions designed and customized using Canva

---

## 📷 Website Preview

Explore premium tile collections with:

* Elegant UI
* Interactive gallery
* Secure authentication
* Responsive layouts
* Dynamic user experience

---

## 📄 License

This project is created for educational and assignment purposes.
