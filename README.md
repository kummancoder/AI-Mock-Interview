# AI Mock Interview Website

An AI-powered platform designed to help students practice technical and behavioral interviews in a realistic environment. The system simulates interviewer-style questioning, provides instant feedback.

---

## 🚀 Features

- **AI Interviewer Simulation**
    
    - Conducts technical & behavioral mock interviews.
        
    - Dynamically generates questions based on role/skill selection.
        
- **Multi-Domain Support**
    
    - Covers MERN stack, Data Structures & Algorithms, Aptitude, and more.
        
- **Real-Time Feedback**
    
    - Evaluates answers and provides AI-driven suggestions.
        
    - Highlights areas for improvement (communication, technical accuracy, confidence).
        
- **Performance Tracking**
    
    - Stores interview history and scores.
        
        
- **User-Friendly Dashboard**
    
    - Clean UI for managing interviews, and viewing reports.
        

---

## 🛠 Tech Stack

### Frontend

- **React.js** (UI components, routing)
    
- **TailwindCSS / ShadCN** (modern responsive styling)
    
- **Framer Motion** (animations)
    

### Backend

- **Node.js + Express.js** (REST APIs)
    
- **MongoDB Atlas** (database for users, interview history, feedback)
    
- **JWT Authentication** (secure login & sessions)
    

### AI Integration

- **OpenAI API / LLM Models** (for interview simulation & feedback)
    

### Deployment

- **Frontend** → Vercel / Netlify
    
- **Backend** → Render / Railway
    
- **Database** → MongoDB Atlas
    

---

## 📈 Future Improvements

- **Voice-Based Interviews** – AI interviewer asks and evaluates spoken responses.
    
- **Role-Specific Interview Modes** – Customize interviews for roles like Frontend Dev, Backend Dev, Data Scientist, etc.
    
- **AI Resume Analyzer** – Upload resume to generate personalized interview questions.
    
- **Peer-to-Peer Mock Interviews** – Connect users for real-time mock interviews with AI assistance.
    
- **Gamification** – Leaderboards, badges, and streaks to motivate consistent practice.
    

---

## ⚡ Getting Started

### 1. Clone the repository

`git clone https://github.com/your-username/ai-mock-interview.git cd ai-mock-interview`

### 2. Install dependencies

`npm install`

### 3. Setup environment variables

Create a `.env` file in the root with:

`MONGO_URI=your_mongodb_connection JWT_SECRET=your_jwt_secret OPENAI_API_KEY=your_openai_key`

### 4. Run the project

`# Run backend cd server npm start  # Run frontend cd client npm run dev`

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request if you’d like to suggest new features or fix bugs.
