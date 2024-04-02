import './App.module.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../../components/header/header.tsx";
import Meal from "../Meal/Meal.tsx";
import styles from './App.module.css'
import DetailMeal from "../DetailMeal/DetailMeal.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <div className={styles.wrapper}>
                <Header/>
                <Routes>
                    <Route
                        path={'/'}
                        element={
                            <Meal
                                text={'The Meal'}
                                title={'Text'}
                                paragraph={'text'}
                                imageUrl={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
                            />
                        }/>
                    <Route path={'/detail'} element={<DetailMeal/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App
