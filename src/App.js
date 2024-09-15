import styles from './App.module.css';
// import { ErrorComponent } from "./ErrorComponent";
// import {ListContainerComponent} from "./ListContainerComponent"
// import {ButtonContainerComponent} from "./ButtonContainerComponent";
import React, {useState} from "react";

const  App = () =>  {
    const validate = (val) => val.length >= 3;

    const [list ,setList] = useState([])
    const [error, setError] = useState('')
    const [value, setValue] = useState('')
    const getNewValue = (props) => {
        let newValue = prompt("ВВедите значение");
        if(!validate(newValue)){
            setError('Введите больше 2 символов')
        }else {
            setError('')
            setValue(newValue)
        }
    }
    // const updatedList = [...list, { id:Date.now, value }]
    const onAddButtonClick = () => {
        if (validate(value)) {
            const updatedList = [...list, { id: Date.now(), value }]
            setList((prev) => [...prev, {id: Date.now(), value, date: new Date()}]);
            setList(updatedList)
            console.log(list)
            setValue('');
            setError('');
        }
        return list
    };
    const isValueValid = validate(value);
    return (
        <div className={styles.app}>
            <h1 className="page-heading">Ввод значения</h1>
            <p className="no-margin-text">
                Текущее значение <code></code>: "
                <output className="current-value">{value}</output>
                "
            </p>
            <div className={styles.error}>{error}</div>
            <div className={styles.buttonsContainer}>
                <button onClick={getNewValue}>Ввести новое</button>

                <button onClick={onAddButtonClick} disabled={!isValueValid}>Добавить в список</button>
            </div>
            <div className={styles.listContainer}>
                <h2 className={styles.listHeading}>Список:</h2>
                <p className="no-margin-text">Нет добавленных элементов</p>
                <ul className="list">
                    {list.map(({id, value})=><li key = {id}>{value}</li>)}
                </ul>
            </div>
        </div>
  );
}
export default App

