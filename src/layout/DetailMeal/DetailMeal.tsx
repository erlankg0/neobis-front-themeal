import styles from './detail.module.css'
import MealImage from "../../components/image/image.tsx";
import {Title} from "../../components/title/title.tsx";
import Ingredients from "../../components/ingredients/ingredients.tsx";

const DetailMeal = () => {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h2 className={styles.title}>Breakfast Potatoes</h2>
                        <p className={styles.paragraph}>Breakfast | Canadian</p>
                    </div>

                    <Ingredients
                        ingredients={[{title: 'Potatoes', count: '3 Medium'}, {title: 'Olive Oil', count: '1 tbs'}]}/>
                </div>
                <MealImage url={'https://www.themealdb.com/images/media/meals/1550441882.jpg'}/>
            </section>
            <section className={styles.instruction}>
                <Title value={'Instruction'}/>
                <p className={styles.instructionText}>Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much
                    easier to chop! Wash the potatoes and cut medium dice into square pieces. To prevent any browning,
                    place the already cut potatoes in a bowl filled with water. In the meantime, heat 1-2 tablespoons of
                    oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly. Once the
                    oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as
                    needed. Cook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon
                    more of oil. Chop up the bacon and add to the potatoes. The bacon will start to render and the fat
                    will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp.
                    Once the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once
                    more. Add dried or fresh parsley. Control heat as needed. Let the garlic cook until fragrant, about
                    one minute. Just before serving, drizzle over the maple syrup and toss. Let that cook another
                    minute, giving the potatoes a caramelized effect. Serve in a warm bowl with a sunny side up egg!</p>
            </section>
        </div>
    )
}

export default DetailMeal;