import {useDispatch, useSelector} from 'react-redux';
import {colorChanged, statusChanged} from '../redux/filters/actions';

const numberOfTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return 'No tasks';
    case 1:
      return '1 task';
    default:
      return `${no_of_todos} tasks`;
  }
};

const statusOptions = ['All', 'Incomplete', 'Complete'];

const colorOptions = [
  {
    key: 'green',
    label: 'Olive',
    dotClass: 'bg-[#73816a]',
    activeClass: 'border-[#73816a] bg-[#73816a] text-white shadow-[0_10px_24px_rgba(115,129,106,0.2)]',
  },
  {
    key: 'yellow',
    label: 'Ochre',
    dotClass: 'bg-[#c6934c]',
    activeClass: 'border-[#c6934c] bg-[#c6934c] text-white shadow-[0_10px_24px_rgba(198,147,76,0.2)]',
  },
  {
    key: 'red',
    label: 'Claret',
    dotClass: 'bg-[#8f5349]',
    activeClass: 'border-[#8f5349] bg-[#8f5349] text-white shadow-[0_10px_24px_rgba(143,83,73,0.2)]',
  },
];

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const todosRemaining = todos.filter((todo) => !todo.completed).length;
  const {status, colors} = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'removed'));
    } else {
      dispatch(colorChanged(color, 'added'));
    }
  };

  return (
    <footer className="paper-inset mt-8 rounded-[28px] px-4 py-5 sm:px-5">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="small-caps text-[var(--muted)]">Open ledger</p>
          <p className="mt-2 text-base text-[var(--ink)]">
            {numberOfTodos(todosRemaining)} left
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="small-caps text-[0.62rem] text-[var(--muted)]">Show</p>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,56,74,0.14)] ${
                  status === option
                    ? 'border-[var(--navy)] bg-[var(--navy)] text-[var(--paper)] shadow-[0_10px_24px_rgba(36,56,74,0.18)]'
                    : 'border-[var(--line)] bg-[rgba(255,248,240,0.82)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--navy)]'
                }`}
                onClick={() => handleStatusChange(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="small-caps text-[0.62rem] text-[var(--muted)]">Mark by tone</p>
          <div className="flex flex-wrap gap-2">
            {colorOptions.map((option) => {
              const isActive = colors.includes(option.key);

              return (
                <button
                  key={option.key}
                  type="button"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(36,56,74,0.14)] ${
                    isActive
                      ? option.activeClass
                      : 'border-[var(--line)] bg-[rgba(255,248,240,0.82)] text-[var(--muted)] hover:border-[var(--gold)] hover:text-[var(--ink)]'
                  }`}
                  onClick={() => handleColorChange(option.key)}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${isActive ? 'bg-white' : option.dotClass}`}
                  />
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
