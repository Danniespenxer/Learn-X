import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCourses } from "../hooks/useCourses";
import CourseCard from "../components/CourseCard";
import ProgressBar from "../components/ProgressBar";

const Dashboard: React.FC = () => {
  const { courses } = useCourses();
  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Your Courses</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2em" }}>
          {courses.length === 0 && <p>No courses enrolled yet.</p>}
          {courses.map(c => (
            <CourseCard
              key={c.id}
              title={c.title}
              description={c.description}
              imageUrl={c.imageUrl}
              progress={c.progress}
            />
          ))}
        </div>
        <h2 style={{ marginTop: "2em" }}>Overall Progress</h2>
        <ProgressBar value={courses.length ? Math.round(courses.reduce((a, b) => a + b.progress, 0) / courses.length) : 0} />
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;