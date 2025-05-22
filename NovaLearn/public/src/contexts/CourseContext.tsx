import React, { createContext, useState, useContext, ReactNode } from "react";

type Course = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  progress: number;
  completed: boolean;
};

const CourseContext = createContext<{
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}>({
  courses: [],
  setCourses: () => {},
});

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => useContext(CourseContext);