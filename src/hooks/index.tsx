import React, { useState, useEffect } from 'react';
import { fetchTodos } from '../services/todos';
import { Todo } from '../types';

export const useTodos = (): [todos: Todo[], isLoading: boolean] => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const act = async () => {
            const response: Todo[] = await fetchTodos();
            setTodos(response);
            setIsLoading(false);
        };
        act();
    }, []);

    return [todos, isLoading];
};