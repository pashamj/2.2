import React from 'react';
import styles from './App.module.css';
export function MyComponent ()  {

    const onClick = () =>  {
        let newValue = undefined
        newValue = prompt('Введите нужное значение')

    }

    return (

        <div>
            <h1>Введите значение</h1>
            <button onClick={onClick} className="button">Ввести новое</button>
            <button  className="button" disabled>Добавить в список</button>
        </div>
    );
};


