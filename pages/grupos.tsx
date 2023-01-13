import { IBadge, IStudyGroup } from "../models";
import { Hero } from "../components/Hero";
import { NextPage } from "next";
import { CategoryFilter, StudyGroup } from "../components";
import { getFirebaseData } from "../utils";

interface GroupsPageProps {
  categories: IBadge[];
  groups: IStudyGroup[];
}

const Groups: NextPage<GroupsPageProps> = ({ categories, groups }) => {
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
        <ul className="groups__tags">
          <ul className="category-filter">
            <CategoryFilter
              categories={categories}
              handleFilter={handleFilter}
            />
          </ul>
        </ul>
        <div className="groups__list">
          {groups.map((group: IStudyGroup) => {
            return (
              <StudyGroup
                key={group.id}
                id={group.id}
                link={group.link}
                image={group.image}
                name={group.name}
                description={group.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  const groups = await getFirebaseData("groups");
  const categories = await getFirebaseData("categories");

  return {
    props: {
      categories,
      groups,
    },
  };
}

export default Groups;
