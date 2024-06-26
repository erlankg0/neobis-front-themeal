import MealText from "../../components/meal/meal.tsx";
import MealImage from "../../components/image/image.tsx";
import React from "react";
import styles from './meal.module.css';
import SearchMeal from "../../components/search/search.tsx";

interface IMeal {
    title: string,
    text: string,
    paragraph: string,
    imageUrl: string,
    id: string,

}

const Meal: React.FC<IMeal> = ({title, text, paragraph, imageUrl, id}) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <MealText title={title} text={text} paragraph={paragraph} url={id}/>
                <MealImage url={imageUrl}/>
            </div>
            <SearchMeal/>
        </div>

    )
}

export default Meal;