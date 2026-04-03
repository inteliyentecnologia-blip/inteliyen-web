import { createBrowserRouter } from "react-router-dom"; 
import { HomePage } from "./pages/HomePage"; // <-- Este va CON llaves
import CoursesListPage from "./pages/CoursesListPage"; // <-- Este va SIN llaves
import CourseDetailPage from "./pages/CourseDetailPage"; // <-- Este va SIN llaves

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