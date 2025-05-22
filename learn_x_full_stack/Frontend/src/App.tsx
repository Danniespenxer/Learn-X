import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import VideoUpload from "./pages/VideoUpload";
import ChatRoom from "./pages/ChatRoom";
import Badges from "./pages/Badges";
import Assignments from "./pages/Assignments";
import Certificate from "./pages/Certificate";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses/:courseId/upload" element={<VideoUpload />} />
        <Route path="/courses/:courseId/chat" element={<ChatRoom />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/certificate/:courseId" element={<Certificate />} />
      </Routes>
    </Router>
  );
}
export default App;