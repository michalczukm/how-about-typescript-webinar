import React from 'react';
import { Item } from './Item';

export const List = ({ todos, actions, emptyState = null }) => {
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
