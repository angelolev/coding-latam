export interface IRecommendedCourse {
    id: string;
    status: string;
    image: string;
    title: string;
    description: string;
    link: string;
    releaseDate: string;
}

export interface IRecommendedCourses {
    coursesList: IRecommendedCourse[]
}