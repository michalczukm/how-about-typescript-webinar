import React from 'react';

import styles from './Item.module.css';

export const Item = ({ todo, actions }) => {
    const isChecked = !!todo.doneAt;

    const checkItem = () => {
        isChecked ? actions.markTodoNotDone(todo.id) : actions.markTodoDone(todo.id);
    };

    const deleteTodo = () => actions.deleteTodo(todo.id);

    return (
        <div className={styles.container}>
            <label className={isChecked ? styles.done : ''}>
                <input type="checkbox" checked={isChecked} onChange={checkItem} />
                <span>{todo.content}</span>
            </label>
            <button onClick={deleteTodo}>🗑</button>
        </div>
    );
};
