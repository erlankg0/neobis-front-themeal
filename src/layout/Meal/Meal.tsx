import MealText from "../../components/meal/meal.tsx";
import MealImage from "../../components/image/image.tsx";
import React from "react";
import styles from './meal.module.css';

interface IMeal {
    title: string,
    text: string,
    paragraph: string,
    imageUrl: string,

}

const Meal: React.FC<IMeal> = ({title, text, paragraph, imageUrl}) => {
    return (
        <div className={styles.content}>
            <MealText title={title} text={text} paragraph={paragraph}/>
            <MealImage url={imageUrl}/>
        </div>
    )
}

export default Meal;