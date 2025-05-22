import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VideoPlayer from "../../components/VideoPlayer";
import ProgressBar from "../../components/ProgressBar";

const CourseDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Dummy data
  const course = {
    id,
    title: "Nova JS Course",
    description: "A course about creative Next.js LMS design.",
    videoUrl: "/sample.mp4",
    progress: 60,
    transcript: "Welcome to the course! ..."
  };

  return (
    <>
      <Header />
      <main style={{ padding: "2em" }}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <VideoPlayer src={course.videoUrl} transcript={course.transcript} />
        <ProgressBar value={course.progress} />
      </main>
      <Footer />
    </>
  );
};

export default CourseDetailPage;