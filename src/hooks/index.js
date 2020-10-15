import React, { useState, useEffect } from 'react';
import { fetchTodos } from '../services/todos';

export const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const act = async () => {
            const response = await fetchTodos();
            setTodos(response);
        };
        act();
    }, []);

    return todos;
};
