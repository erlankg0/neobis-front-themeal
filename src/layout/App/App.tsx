import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../../components/header/header.tsx";
import Meal from "../Meal/Meal.tsx";
import styles from './App.module.css';
import DetailMeal from "../DetailMeal/DetailMeal.tsx";
import {useEffect, useState} from "react";
import {getRandomMeal} from "../../utils/network.ts";
import {IMealResponse} from "../../utils/network.ts";

const App = () => {
    const [randomMeal, setRandomMeal] = useState<IMealResponse>();

    useEffect(() => {
        const getRandom = async () => {
            try {
                const response = await getRandomMeal();
                setRandomMeal(response);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        };

        getRandom(); // Invoking async function directly
    }, []); // Empty dependency array
    if (randomMeal){
        console.log(randomMeal.data.meals[0].strMeal)
    }
    return (
        <BrowserRouter>
            {randomMeal && <div className={styles.wrapper}>
                <Header/>
                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Meal
                                text={randomMeal.data.meals[0].strMeal}
                                title={'Meal of the Day'}
                                paragraph={randomMeal.data.meals[0].strCategory}
                                imageUrl={randomMeal.data.meals[0].strMealThumb}
                                id={randomMeal.data.meals[0].idMeal}
                            />
                        }
                    />
                    <Route path={'/detail/:id'} element={<DetailMeal />} />
                </Routes>
            </div>}
        </BrowserRouter>
    );
}

export default App;
