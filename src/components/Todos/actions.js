export const addTodo = (content) => ({
    type: 'ADD',
    payload: content,
});

export const toggleShowAll = () => ({
    type: 'TOGGLE_SHOW_ALL',
});

export const deleteTodo = (id) => ({
    type: 'DELETE',
    payload: id,
});

export const markTodoDone = (id) => ({
    type: 'MARK_DONE',
    payload: id,
});

export const markTodoNotDone = (id) => ({
    type: 'MARK_NOT_DONE',
    payload: id,
});
