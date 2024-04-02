import {Input} from "antd";
import {SearchProps} from "antd/es/input";
import styles from './search.module.css'
const {Search} = Input;

const SearchMeal = () => {
    const handleOnSearch: SearchProps['onSearch'] = (value) => {
        console.log(value);
    };

    return <Search className={styles.input} placeholder={'Поиск...'} onSearch={handleOnSearch} size={'middle'} enterButton={'Поиск'}/>
}

export default SearchMeal