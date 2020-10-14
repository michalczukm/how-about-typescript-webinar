export const initialState = {
    showAll: false,
    todos: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Math.max(state.todos.map(({ id }) => id)) + 1,
                        addedAt: new Date(),
                        content: action.payload,
                    },
                ],
            };
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'MARK_DONE':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, doneAt: new Date() } : todo,
                ),
            };
        case 'MARK_NOT_DONE':
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        const { doneAt, ...task } = todo;
                        return task;
                    } else {
                        return todo;
                    }
                }),
            };
        case 'TOGGLE_SHOW_ALL':
            return {
                ...state,
                showAll: !state.showAll,
            };
        default:
            return state;
    }
};
