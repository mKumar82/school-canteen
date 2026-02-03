🍎 Frontend Assignment: School Canteen
A high-performance frontend prototype for managing canteen operations, including snacks, students, and order processing. Built with Next.js, React, and Redux Toolkit, this project prioritizes a clean UI, responsive layout, and sophisticated state management.
🚀 Setup Instructions
Clone the repository
bash
git clone <repository-url>
cd <project-folder>
Use code with caution.

Install dependencies
bash
npm install
Use code with caution.

Run the development server
bash
npm run dev
Use code with caution.

Access the application
Open http://localhost:3000 in your browser.
📦 Tech Stack
Category	Libraries
Core	Next.js (App Router), React, TypeScript
State Management	@reduxjs/toolkit (RTK Query), react-redux
Form Handling	react-hook-form
Feedback & UI	react-hot-toast, react-loading-indicators
Styling	Tailwind CSS
🧪 Mock Data Approach
This project simulates a backend environment using Next.js API Routes to demonstrate full-stack integration:
In-Memory Storage: Data for students, snacks, and orders is stored in server memory.
Latency Simulation: Artificial delays are added to requests to showcase RTK Query loading, success, and error states.
API Endpoints:
GET /api/snacks | GET /api/students
POST /api/students | POST /api/orders
⚠️ Important Note About Deployment
Because this project uses in-memory storage within Vercel Serverless Functions:
Statelessness: Serverless functions do not persist memory between requests.
Data Persistence: Created students or orders may reset or disappear after deployment.
Context: This behavior is expected for a frontend prototype; a production environment would require a dedicated database like PostgreSQL or MongoDB.
🔗 Live Demo
The project is deployed and ready for preview:
View School Canteen Live

🔗 Live URL: https://school-canteen-omega.vercel.app/

⸻
