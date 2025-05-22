import { useContext } from "react";
import { useCourseContext } from "../context/CourseContext";

export const useCourses = () => useCourseContext();