import type { NextPage } from 'next'
import Layout from "../components/Layout";
import Header from "../components/Header";
import RecommendedCourses from "../components/RecommendedCourses";
import { useSelector, useDispatch } from "react-redux";
import { iconAction } from "../store/authSlice";
import sun24 from "../images/sun-24.png";
import moon30 from "../images/moon-30.png";
import Image from 'next/image'
import { RootState } from '../store/authSlice';

interface InterfaceIcon {
  icon: string;
}

const Home: NextPage = () => {
  const dispatcher = useDispatch()
  let icon:InterfaceIcon = useSelector<RootState, InterfaceIcon>(state => state.icon)

  function changeIcon() {
    icon.icon === "moon" ? dispatcher(iconAction.iconSun()) : dispatcher(iconAction.iconMoon())
  }

  return (
    <Layout title="Home">
      <div onClick={changeIcon} className={`iconBox ${icon.icon}`}>
          <Image
            width={30}
            height={30}
            objectFit="cover"
            src={icon.icon === 'moon' ? moon30 : sun24}
            alt="image"
          />
        </div>
      <Header />
      <RecommendedCourses />
    </Layout>
  )
}

export default Home
