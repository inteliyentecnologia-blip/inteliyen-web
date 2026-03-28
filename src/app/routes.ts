import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CoursesListPage } from "./pages/CoursesListPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/cursos",
    Component: CoursesListPage,
  },
  {
    path: "/cursos/:courseId",
    Component: CourseDetailPage,
  },
]);
