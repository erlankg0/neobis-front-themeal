import React from "react";
import styles from './ingredients.module.css'
interface IIngredient {
    title: string,
    count: string
}

interface IIngredients {
    ingredients: IIngredient[],
}


const Ingredients: React.FC<IIngredients> = ({ingredients}) => {
    return (
        <ul className={styles.ingredients}>
            {ingredients.map((ingredient) => (
                <li className={styles.ingredient}>
                    <p className={styles.title}>{ingredient.title}</p>
                    <div className={styles.count}>{ingredient.count}</div>
                </li>
            ))}
        </ul>
    )
}

export default Ingredients;