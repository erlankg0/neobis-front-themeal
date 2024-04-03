import styles from './detail.module.css'
import MealImage from "../../components/image/image.tsx";
import {Title} from "../../components/title/title.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getByIdMeal, IMealResponse} from "../../utils/network.ts";
import Ingredients from "../../components/ingredients/ingredients.tsx";
import {nanoid} from "nanoid";
import {Button} from "antd";

interface IIngredient {
    ingredient: string,
    count: string,
    id: string,
}

interface IIngredientList {
    ingredients: IIngredient[]
}

const InfoMeal = () => {
    const [meal, setMeal] = useState<IMealResponse>();
    const [ingredients, setIngredients] = useState<IIngredientList>()
    const {id} = useParams()

    useEffect(() => {
        const getMeal = async (id: string) => {
            try {
                const response = await getByIdMeal(id);
                setMeal(response);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        }
        if (id) {
            getMeal(id)
        }
        if (meal?.data) {
            // ТУТ ВОПРОСЫ К API И К BACKEND
            const ingredients = [
                {
                    ingredient: meal?.data.meals[0]?.strIngredient1,
                    count: meal?.data.meals[0]?.strMeasure1,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient2,
                    count: meal?.data.meals[0]?.strMeasure2,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient3,
                    count: meal?.data.meals[0]?.strMeasure3,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient4,
                    count: meal?.data.meals[0]?.strMeasure4,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient5,
                    count: meal?.data.meals[0]?.strMeasure5,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient6,
                    count: meal?.data.meals[0]?.strMeasure6,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient7,
                    count: meal?.data.meals[0]?.strMeasure7,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient8,
                    count: meal?.data.meals[0]?.strMeasure8,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient9,
                    count: meal?.data.meals[0]?.strMeasure9,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient11,
                    count: meal?.data.meals[0]?.strMeasure11,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient12,
                    count: meal?.data.meals[0]?.strMeasure12,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient13,
                    count: meal?.data.meals[0]?.strMeasure13,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient10,
                    count: meal?.data.meals[0]?.strMeasure10,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient14,
                    count: meal?.data.meals[0]?.strMeasure14,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient15,
                    count: meal?.data.meals[0]?.strMeasure15,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient16,
                    count: meal?.data.meals[0]?.strMeasure16,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient17,
                    count: meal?.data.meals[0]?.strMeasure17,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient18,
                    count: meal?.data.meals[0]?.strMeasure18,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient19,
                    count: meal?.data.meals[0]?.strMeasure19,
                    id: nanoid()
                },
                {
                    ingredient: meal?.data.meals[0]?.strIngredient20,
                    count: meal?.data.meals[0]?.strMeasure20,
                    id: nanoid()
                },
            ];

            const filteredIngredients = ingredients.filter(ingredient => ingredient.ingredient && ingredient.count);
            setIngredients({ingredients: filteredIngredients});
        }
    }, [id, meal?.data]);

    return (

        <div className={styles.container}>
            {meal && (<>
                <section className={styles.content}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h2 className={styles.title}>{meal.data.meals[0].strMeal}</h2>
                            <p className={styles.paragraph}>{meal.data.meals[0].strCategory}</p>
                        </div>
                        {ingredients?.ingredients && <Ingredients ingredients={ingredients?.ingredients}/>}
                    </div>
                    <MealImage url={meal.data.meals[0].strMealThumb}/>
                </section>
                <section className={styles.instruction}>
                    <Title value={'Instruction'}/>
                    <p className={styles.instructionText}>{meal.data.meals[0].strInstructions}</p>
                    <Button className={styles.button} danger href={meal.data.meals[0].strYoutube}>Watching in Youtube</Button>
                </section>

            </>)}
        </div>
    )
};
export default InfoMeal;