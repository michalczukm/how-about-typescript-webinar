import React, { useReducer } from 'react';
import partition from 'lodash.partition';
import { reducer, initialState } from './reducer';
import { deleteTodo, markTodoDone, markTodoNotDone, addTodo, toggleShowAll } from './actions';
import { Create } from '../Create';
import { List } from '../List'

export const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onToggleShowAll = () => dispatch(toggleShowAll());
    const onTodoSubmitted = (content) => dispatch(addTodo(content));

    const [doneTasks, todoTasks] = state.showAll
        ? partition(state.todos, (todo) => !!todo.doneAt)
        : [[], state.todos.filter((todo) => !todo.doneAt)];

    const withDispatch = (fun) => (...args) => dispatch(fun(...args));

    const todoItemActions = {
        deleteTodo: withDispatch(deleteTodo),
        markTodoDone: withDispatch(markTodoDone),
        markTodoNotDone: withDispatch(markTodoNotDone),
    };

    return (
        <>
            <Create onSubmitted={onTodoSubmitted} />
            
            <List
                key="todo"
                todos={todoTasks}
                actions={todoItemActions}
                emptyState={<p>🎉 Nothing todo!</p>}
            />
            <button onClick={onToggleShowAll}>{state.showAll ? 'Hide done' : 'Show done'}</button>

            {state.showAll && (
                <>
                    <hr />
                    <h2>Done</h2>
                    <List key="done" todos={doneTasks} actions={todoItemActions} emptyState={<p>🛌 No tasks done yet</p>} />
                </>
            )}
        </>
    );
};
