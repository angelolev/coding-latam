// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ICategory } from "../../models/category";

// type Data = {
//   categories: Category[]
// }

const categories = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JS",
  },
  {
    id: 4,
    name: "Git",
  },
  {
    id: 5,
    name: "UX",
  },
  {
    id: 6,
    name: "SASS",
  },
  {
    id: 7,
    name: "Performance",
  },
  {
    id: 8,
    name: "Accesibilidad",
  },
  {
    id: 9,
    name: "Angular",
  },
  {
    id: 10,
    name: "React",
  },
  {
    id: 11,
    name: "Vue",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICategory[]>
) {
  res.status(200).json([...categories]);
}
