// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Category } from '../../models/category'

// type Data = {
//   categories: Category[]
// }

const groups = [
    {
        id: 1,
        name: 'HTML',
        link: 'https://discord.gg/nsMjjEt69k',
        image: 'html.png',
        description: 'Ven a conocer HTML desde 0'
    },
    {
        id: 2,
        name: 'CSS',
        link: 'https://discord.gg/nsMjjEt69k',
        image: 'css.png',
        description: 'Estiliza tus templates aplicando CSS'
    },
    {
        id: 3,
        name: 'JS',
        link: 'https://discord.gg/ubj3NMzWfE',
        image: 'js.png',
        description: 'Conoce las bases de Javascript'
    },
    {
        id: 4,
        name: 'SASS',
        link: 'https://discord.gg/nsMjjEt69k',
        image: 'sass.png',
        description: 'Dale superpoderes a tu CSS'
    },
    {
        id: 5,
        name: 'Responsive Design',
        link: 'https://discord.gg/RdNk2Ndgmj',
        image: 'responsive.png',
        description: 'Tu web adaptable a todos los dispositivos'
    },
    {
        id: 6,
        name: 'Performance y optimización',
        link: 'https://discord.gg/dWxs4GMwha',
        image: 'lighthouse.png',
        description: 'Performance y optimización'
    },
    {
        id: 7,
        name: 'React',
        link: 'https://discord.gg/vYJnq6faKg',
        image: 'react.png',
        description: 'Iniciando con React Js'
    }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Category[]>
) {
  res.status(200).json([...groups])
}
