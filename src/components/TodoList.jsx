import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import fetchTodos from '../redux/thunk/fetchTodos';
import Todo from './Todo';

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filterByStatus = (todo) => {
    const {status} = filters;
    switch (status) {
      case 'Complete':
        return todo.completed;

      case 'Incomplete':
        return !todo.completed;

      default:
        return true;
    }
  };

  const filterByColors = (todo) => {
    const {colors} = filters;
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };

  const filteredTodos = todos.filter(filterByStatus).filter(filterByColors);

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center gap-4">
        <p className="small-caps whitespace-nowrap text-[var(--muted)]">Current entries</p>
        <div className="h-px flex-1 bg-[var(--line)]" />
      </div>

      {filteredTodos.length > 0 ? (
        <ul className="space-y-3 text-sm text-[var(--ink)]">
          {filteredTodos.map((todo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : (
        <div className="paper-inset rounded-[26px] px-5 py-8 text-center text-sm leading-7 text-[var(--muted)]">
          No tasks match the current view. Add a new entry or change the filters to
          reopen the ledger.
        </div>
      )}
    </section>
  );
}
