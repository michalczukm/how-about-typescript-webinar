import { fetchTodos } from '../services';

export const useTodos = (filter = { state: 'ALL' }) => {
    const [todos, setTodos] = useState([]);

    useEffect(async () => {
        const response = await fetchTodos(filter);
        setTodos(response);
    }, []);

    return todos;
};
