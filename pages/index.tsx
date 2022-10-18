import type { NextPage } from 'next'
import Layout from "../components/Layout";
import Header from "../components/Header";
import RecommendedCourses from "../components/RecommendedCourses";
import JoinUs from '../components/JoinUs';
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/authSlice";
import sun24 from "../images/sun-24.png";
import moon30 from "../images/moon-30.png";
import Image from 'next/image'
import { RootState } from '../store/authSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { decrement, increment } from '../store/slices/counterSlice'
import { IRecommendedCourse, IRecommendedCourses } from '../models/recommended-course';

import { database } from "../firebase/client"
import { firestore } from '../firebase/admin'
import { collection, getDocs } from "firebase/firestore";
interface InterfaceIcon {
  icon: string;
}

const Home: NextPage<{coursesList: IRecommendedCourse[]}> = (props:IRecommendedCourses ) => {
  // The `state` arg is correctly typed as `RootState` already
  // const count = useAppSelector((state) => state.counter.value)
  // const dispatch = useAppDispatch()


  const dispatcher = useDispatch()
  let icon:InterfaceIcon = useSelector<RootState, InterfaceIcon>(state => state.icon)

  function changeIcon() {
    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())
  }

  return (
    <Layout title="Coding Latam | Comunidad de desarrolladores">
      {/* <div onClick={changeIcon} className={`iconBox ${icon.icon}`}>
          <Image
            width={30}
            height={30}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div> */}
      <Header />
      <RecommendedCourses coursesList={props.coursesList} />
      <JoinUs />
    </Layout>
  )
}

// Home.getInitialProps = () => {
//   return fetch('http://localhost:3000/api/recommendedCourses').then((apiResponse)=> {
//     if(apiResponse.ok) return apiResponse.json()
//   })
// }

export async function getServerSideProps () {
  // const apiResponse = await fetch('http://localhost:3000/api/recommendedCourses')
  
  // if(apiResponse.ok) {
  //   const courses = await apiResponse.json()
  //   return { 
  //     props : {
  //       coursesList: courses
  //     }
  //   }
  // }
  const dbInstance = collection(database, 'recommendedCourses');
  
  const apiResponse = await getDocs(dbInstance)
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
        // res.json([...courses])
        return courses
      })
      .catch((err)=> {
        console.log(err)
        // res.status(404).end()
      })

      return { 
        props : {
          coursesList: apiResponse
        }
      }
}

// export async function getStaticPaths () {
//   return {
//     paths: [],
//     fallback: false
//   }
// }

// export async function getStaticProps(context) {
//   const apiResponse = await fetch('http://localhost:3000/api/recommendedCourses')
  
//   if(apiResponse.ok) {
//     const props = await apiResponse.json()
//     return {props}
//   }
// }

export default Home
