import type { NextApiRequest, NextApiResponse } from "next";
import { IRecommendedCourse } from "../../models";

const recommendedCourses = [
  {
    id: 0,
    description: "Aprende desde cero, el lenguaje con el que construyes la web",
    link: "clases/html",
    image: "web-dev.png",
    status: true,
    title: "Curso de HTML",
    releaseDate: "10 de Mayo",
  },
  {
    id: 1,
    description:
      "Haz que tu sitio web se adapte a cualquier dispositivo o resolución",
    link: "clases/responsive-design",
    image: "responsive-design.png",
    status: true,
    title: "Taller de Responsive Design",
    releaseDate: "28 de Abril",
  },
  {
    id: 2,
    description: "Aprende a maquetar y crear interfaces increíbles con CSS",
    link: "clases/css",
    image: "javascript.png",
    status: true,
    title: "Curso de CSS",
    releaseDate: "14 de Abril",
  },
  {
    id: 3,
    description:
      "Aprende a maquetar tu web de forma fácil y profesional con Flexbox",
    link: "clases/flexbox",
    image: "ecommerce.jpg",
    status: true,
    title: "Taller de Flexbox",
    releaseDate: "10 de Mayo",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRecommendedCourse[]>
) {
  res.status(200).json([...recommendedCourses]);
}
