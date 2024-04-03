import React from "react";
import styles from './ingredients.module.css'
interface IIngredient {
    ingredient: string,
    count: string,
    id: string;
}

interface IIngredients {
    ingredients: IIngredient[],
}


const Ingredients: React.FC<IIngredients> = ({ingredients}) => {
    return (
        <ul className={styles.ingredients}>
            {ingredients.map((ingredient) => (
                <li className={styles.ingredient} key={ingredient.id}>
                    <p className={styles.title}>{ingredient.ingredient}</p>
                    <div className={styles.count}>{ingredient.count}</div>
                </li>
            ))}
        </ul>
    )
}

export default Ingredients;