# 🌿 GreenNest – Indoor Plant Care & Store

![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-brightgreen?style=flat-square)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)

GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations, ensuring a greener and healthier living space during any season.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation Guide](#️-installation-guide)
- [🔑 Environment Variables](#-environment-variables)
- [🌟 Special Sections](#-special-sections)
- [📝 License](#-license)

---

## ✨ Features

✔️ Firebase Authentication (Email + Google Login)  
✔️ Password validation with uppercase, lowercase & min length rules  
✔️ Auto-selected **Plant of The Week** using random selection  
✔️ Fully responsive UI with TailwindCSS  
✔️ Smooth UI interactions using Swiper.js sliders  
✔️ Toast notifications for user actions  
✔️ Persistent authentication state  
✔️ Deployed on **Netlify**

---

## 🛠️ Technologies Used

| Package / Library  | Purpose                          |
| ------------------ | -------------------------------- |
| **React 19**       | Core UI library                  |
| **React Router**   | Client-side routing              |
| **TailwindCSS**    | Styling framework                |
| **Firebase**       | Authentication & hosting support |
| **React Toastify** | Toast notifications              |
| **Swiper**         | Image / content slider           |
| **Lucide-react**   | Icons                            |
| **React Icons**    | Additional icon support          |
| **Netlify**        | Deployment platform              |

---

## 🚀 Live Demo

🔗 **Netlify Deployment:** _(https://nestleaf.netlify.app/)_

---

## 📁 Project Structure

```bash
src/
│── assets/              # Images & static files
│── components/          # Reusable UI components
│── firebase/            # Firebase config
│── layouts/             # Page layouts
│── pages/               # All route pages
│── hooks/               # Custom hooks (if any)
│── main.jsx             # React DOM bootstrap
tailwind.config.js
package.json
```

---

## ⚙️ Installation Guide

### 📌 Prerequisites

Ensure you have installed:

Node.js (v18+ recommended)

npm or yarn package manager

---

## 🧾 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Antor-Chowdhury/GreenNest.git
cd GreenNest

# Install dependencies
npm install

# Run the project locally
npm run dev
```

---

## 🔑 Environment Variables

Create a .env.local file at root and add your Firebase credentials:

```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id
```

---

## 🌟 Special Sections

### 🥇 Plant of the Week

A random plant is selected from the database using:

```js
const randomIndex = Math.floor(Math.random() * data.length);
setPlant(data[randomIndex]);
```

---

## 🚧 Future Enhancements

### 🚀 Features planned for upcoming releases:

- 🛒 Wishlist and Cart system

- 🌙 Dark Mode support

- 🛠 Admin panel for adding new plants

---

## 📝 License

This project is licensed under the MIT License.
