// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ILesson } from "../../models";

const lessons = [
  {
    id: 0,
    type: "css",
    description:
      "En este capítulo conocerás la jerarquía de los diferentes selectores CSS",
    link: "especificidad",
    title: "14 - Especificidad",
    urlVideo: "https://www.youtube.com/embed/8e6Ml-3R2kw",
  },
  {
    id: 1,
    type: "html",
    description:
      "En este capítulo aprenderemos la estructura básica de un documento HTML, sus partes y qué componentes puedes incluir en cada una de ellas.",
    link: "estructura-basica",
    title: "06 - Estructura basica",
    urlVideo: "https://www.youtube.com/embed/0MxIerA8QkA",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILesson[]>
) {
  res.status(200).json([...lessons]);
}
