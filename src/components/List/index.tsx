import React from 'react';
import { Todo } from '../../types';
import { Item } from '../Item';

type Actions = {
    deleteTodo: (id: string) => void,
    markTodoDone: (id: string) => void,
    markTodoNotDone: (id: string) => void
}

type Props = {
    todos: Todo[],
    actions: Actions,
    emptyState: React.ReactElement<{ foo: string}>
};

export const List: React.FC<Props> = ({ todos, actions, emptyState = null }) => {
    return (
        <div>
            {todos.length <= 0 ? (
                emptyState
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <Item actions={actions} todo={todo} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
