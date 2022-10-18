// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { database } from "../../firebase/client"
import { firestore } from '../../firebase/admin'
import { collection, getDocs } from "firebase/firestore";
import { IRecommendedCourse } from '../../models/recommended-course'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IRecommendedCourse[]>
) {
  const { query } = req
  const dbInstance = collection(database, 'recommendedCourses');
  
  await getDocs(dbInstance)
      .then((data) => {
        const courses: IRecommendedCourse[] = data.docs.map((item)=> {
          // return ({ ...item.data(), id: item.id });
          return ({
            status: item.data().status,
            image: item.data().image,
            releaseDate: item.data().releaseDate,
            description: item.data().description,
            link: item.data().link,
            title: item.data().title,
            id: item.id
          })
        })
        res.json([...courses])
      })
      .catch((err)=> {
        res.status(404).end()
      })
}
