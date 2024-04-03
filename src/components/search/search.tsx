import {Input} from "antd";
import {SearchProps} from "antd/es/input";
import styles from './search.module.css'

const {Search} = Input;
import {searchMeal} from "../../utils/network.ts";
import {useNavigate} from "react-router-dom";

const SearchMeal = () => {
    const navigate = useNavigate();// hook для переадресации
    const handleOnSearch: SearchProps['onSearch'] = (value) => {
        searchMeal(value).then(r => {
            if (r.data) {
                navigate(`/detail/${r.data.meals[0].idMeal}`)
            }
        })

    };

    return <Search className={styles.input} placeholder={'Поиск...'} onSearch={handleOnSearch} size={'middle'}
                   enterButton={'Поиск'}/>
}

export default SearchMeal