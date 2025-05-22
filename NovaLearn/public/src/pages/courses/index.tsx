import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCourses } from "../../hooks/useCourses";
import CourseCard from "../../components/CourseCard";

const CoursesPage: React.FC = () => {
  const { courses } = useCourses();

  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>Available Courses</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2em" }}>
          {courses.length === 0 && <p>No courses available.</p>}
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
      </main>
      <Footer />
    </>
  );
};

export default CoursesPage;