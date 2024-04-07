import {Button, Input, Typography} from "antd";
import {SearchProps} from "antd/es/input";
import styles from './search.module.css'
import {IMeal, searchMealList} from "../../utils/network.ts";
import {useState} from "react";
import MealText from "../meal/meal.tsx";
import MealImage from "../image/image.tsx";

const {Search} = Input;

const SearchMeal = () => {
    const [mealList, setMealList] = useState<IMeal[]>([]);
    const handleOnSearch: SearchProps['onSearch'] = (value) => {
        const getMeals = async (letter: string) => {
            try {
                const response = await searchMealList(letter);
                setMealList(response.data.meals);
            } catch (error) {
                console.error(error)
            }
        }

        getMeals(value)


    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Typography.Title>Find your Meal</Typography.Title>
                <Search className={`${styles.input} ${styles.antInput}`} placeholder={'Поиск...'}
                        onSearch={handleOnSearch}
                        size={'middle'}
                        enterButton={<Button
                            style={{backgroundColor: '#d49726', borderColor: '#d49726', color: 'black'}}>Поиск</Button>}
                />
            </div>

            {mealList && mealList.map(meal => {
                return (<div className={styles.content}>
                    <MealText title={meal.strMeal} text={meal.strMeal} paragraph={meal.strCategory} url={meal.idMeal}/>
                    <MealImage url={meal.strMealThumb}/>
                </div>)
            })}
        </div>
    )
}

export default SearchMeal