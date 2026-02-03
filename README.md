# Frontend Assignment – School Canteen

This project is a frontend prototype built using **Next.js, React, and Redux Toolkit**.  
It demonstrates managing **snacks, students, and orders** with a clean UI, responsive layout, and proper state management.

---

## 🚀 Setup Instructions

1. **Clone the repository**

git clone <repository-url>  
cd <project-folder>

2. **Install dependencies**

npm install

3. **Run the development server**

npm run dev

4. **Open your browser and visit**

http://localhost:3000

---

## 📦 Libraries Used

- **Next.js (16.1.6)** – App Router, routing, API routes
- **React (19.2.3)** – UI development
- **TypeScript** – Type safety and maintainability
- **@reduxjs/toolkit (2.11.2)** – State management and RTK Query
- **react-redux (9.2.0)** – Redux bindings for React
- **react-hook-form (7.71.1)** – Form handling and validation
- **react-hot-toast (2.6.0)** – Toast notifications for success and error states
- **react-loading-indicators (1.0.1)** – Loading spinners and loading states
- **Tailwind CSS** – Styling and responsive UI

---

## 🧪 Mock Data Approach

This project does **not use an external backend**.

- Backend behavior is simulated using **Next.js API routes**
- Data (students, snacks, and orders) is stored **in memory**
- The following APIs are mocked:
  - GET /api/snacks
  - GET /api/students
  - GET /api/students/:id
  - POST /api/students
  - POST /api/orders
- Artificial delays are added to simulate real network latency
- **RTK Query** is used to manage loading, success, and error states

---

## ⚠️ Important Note About Deployment

This project uses **in-memory mock data** inside Next.js API routes.

- In **local development**, the Node.js server remains active, so data behaves consistently
- In **deployed environments (e.g., Vercel)**, API routes run as **serverless functions**
- Serverless functions are **stateless**, meaning in-memory data is **not guaranteed to persist across requests**

### As a result:
- Created students or orders may not persist reliably after deployment
- This behavior is **expected** and does **not indicate a frontend bug**
- A real backend/database would be required for full persistence in production

---

## 🌐 Live Demo

The project is deployed on **Vercel** and accessible here:

🔗 **Live URL:** https://school-canteen-omega.vercel.app/

---
