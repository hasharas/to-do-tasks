
# 📝 Simple Task Management System

A full-stack Task Management System using:

- 🔧 **Backend**: Node.js + Express + TypeORM  
- 🌐 **Frontend**: React (Vite) + Tailwind + HTML/CSS  
- 🐘 **Database**: PostgreSQL  
- 📡 **HTTP Client**: Axios with Interceptors  
- 🐳 Docker & Docker Compose  

---

## 📁 Project Folder Structure

```
task-manager/
├── backend/                  # Node.js + TypeORM backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── entities/
│   │   ├── routes/
│   │   ├── db/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── Dockerfile
│   └── package.json
├── frontend/                 # React Vite app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── configs/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

---

## 🚀 How to Run the Project

### 🔹 Prerequisites

- Docker Desktop installed and running  
- Node.js 18+ (for local development)  
- No `.env` files are required  

---

## 🧩 Backend Setup (Node + PostgreSQL via Docker)

### ✅ Option 1: Using Docker (Recommended)

1. Clone the repo:

```bash
git clone https://github.com/hasharas/to-do-tasks
cd to-do-tasks
```

2. Start all services:

```bash
docker-compose up --build
```

3. Docker will spin up:
- Backend API → [http://localhost:5000](http://localhost:5000)  
- PostgreSQL → `localhost:5432`  
- Frontend App → [http://localhost:3000](http://localhost:3000)

---

## 🌐 Frontend Development (React + Vite)

You can also run the frontend manually in dev mode:

```bash
cd frontend
npm install
npm run dev
```

📍 Runs on: [http://localhost:5173](http://localhost:5173)

---

## 📦 API Endpoints

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/tasks`         | Get 5 latest tasks     |
| POST   | `/api/tasks`         | Create a new task      |
| PATCH  | `/api/tasks/:id`     | Mark task as completed |

---

## ✅ Features

- Add tasks with title + description  
- View latest 5 incomplete tasks  
- Mark task as done (removes from list)  
- Organized with controller/service/entity layers  
- Axios with interceptors for error handling  
- Fully Dockerized setup  

---

## ✨ Bonus Features

- ✅ Axios interceptor (auto redirects on errors)  
- ✅ Clean folder structure  
- ✅ TypeORM with auto schema sync  
- ✅ React modular components  
- ✅ Vite for fast frontend builds  
- ✅ Built-in error handling  

---

## 🛠 Technologies Used

- **Frontend**: React (Vite), HTML/CSS, Axios  
- **Backend**: Node.js, Express, TypeORM  
- **Database**: PostgreSQL  
- **DevOps**: Docker, Docker Compose  

---

## 👨‍💻 Author

**Hashara Sankalpa**  
📧 hasharamsankalpam@gmail.com  
🔗 [GitHub](https://github.com/hasharas)  
🔗 [LinkedIn](https://linkedin.com/in/hashara-sankalpa)
