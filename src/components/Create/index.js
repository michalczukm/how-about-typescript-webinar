import React, { useState } from 'react';

import styles from './Create.module.css';

export const Create = ({ onSubmitted }) => {
    const [content, setContent] = useState('');

    const submit = (event) => {
        onSubmitted(content);
        setContent('');
        event.preventDefault();
    };
    const handleInput = (event) => setContent(event.target.value);

    return (
        <form className={styles.todoForm} onSubmit={submit}>
            <input
                className={styles.todoInput}
                type="text"
                required
                value={content}
                onChange={handleInput}
            />
            <button type="submit">➕</button>
        </form>
    );
};
