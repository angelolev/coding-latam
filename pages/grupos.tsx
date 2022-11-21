import Image from "next/image";
import CategoryFilter from "../components/CategoryFilter";
import Hero from "../components/Hero";
import { database } from "../firebase/client"
import { firestore } from '../firebase/admin'
import { collection, getDocs } from "firebase/firestore";

const Groups = ({categoriesList}) => {
    
    const handleFilter = () => {
        console.log("filtrando");
      };

    return (
      <div className="groups">
        <Hero
          title="Mejora tu aprendizaje con los grupos de estudio"
          image="study.png"
        />

        <section className="groups__description">
          {/* {categories?.categoriesList ? null : <Loader />} */}
          <ul className="groups__tags">
            <ul class="category-filter">
                <CategoryFilter
                    categories={categoriesList}
                    handleFilter={handleFilter}
                />
            </ul>
            {/* <CategoryFilter
                    categories={categories?.categoriesList}
                    handleFilter={handleFilter}
                /> */}
          </ul>
          <div className="groups__list">
          <div className="group">
            <div className="group__image">
                {/* <Image src={`/images/${image}`} width={200} height={203} alt="Hero" /> */}
            </div>
            <div className="group__description">
                <h3>HTML</h3>
                <p>Ven a conocer HTML desde 0</p>
            </div>
        </div>
            {/* {groups.groupsList?.map((group) => {
                    return <StudyGroup key={group.id} group={group} />;
                })} */}
          </div>
        </section>
      </div>
    );
}

export async function getServerSideProps () {
    const dbInstance = collection(database, 'categories');
    
    const apiResponse = await getDocs(dbInstance)
        .then((data) => {
          const categories: IRecommendedCourse[] = data.docs.map((item)=> {
            return ({ ...item.data(), id: item.id });
          })
          // res.json([...categories])
          return categories
        })
        .catch((err)=> {
          console.log(err)
          // res.status(404).end()
        })
  
        return { 
          props : {
            categoriesList: apiResponse
          }
        }
  }
  

export default Groups