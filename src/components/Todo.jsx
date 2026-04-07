import {useDispatch} from 'react-redux';
import updateStatus from '../redux/thunk/updateStatus';
import updateColor from '../redux/thunk/updateColor';
import deleteTodo from '../redux/thunk/deleteTodo';

export default function Todo({todo}) {
  const dispatch = useDispatch();

  const {text, id, completed, color} = todo;
  const checkboxId = `todo-${id}`;
  const todoLabel = text?.trim() || 'todo item';
  const toneClasses = {
    green: {
      surface: 'border-l-[#73816a] bg-[rgba(115,129,106,0.08)]',
      marker:
        'border-[#73816a] text-[#73816a] hover:bg-[rgba(115,129,106,0.12)] focus-visible:ring-[rgba(115,129,106,0.18)]',
      markerActive: 'bg-[#73816a] text-white',
    },
    yellow: {
      surface: 'border-l-[#c6934c] bg-[rgba(198,147,76,0.09)]',
      marker:
        'border-[#c6934c] text-[#c6934c] hover:bg-[rgba(198,147,76,0.12)] focus-visible:ring-[rgba(198,147,76,0.2)]',
      markerActive: 'bg-[#c6934c] text-white',
    },
    red: {
      surface: 'border-l-[#8f5349] bg-[rgba(143,83,73,0.08)]',
      marker:
        'border-[#8f5349] text-[#8f5349] hover:bg-[rgba(143,83,73,0.12)] focus-visible:ring-[rgba(143,83,73,0.18)]',
      markerActive: 'bg-[#8f5349] text-white',
    },
    default: {
      surface: 'border-l-[rgba(181,140,74,0.38)] bg-[rgba(255,250,242,0.76)]',
      marker:
        'border-[var(--line)] text-[var(--muted)] hover:bg-[rgba(111,98,85,0.08)] focus-visible:ring-[rgba(36,56,74,0.12)]',
      markerActive: 'bg-[var(--navy)] text-white',
    },
  };
  const tone = toneClasses[color] ?? toneClasses.default;

  const handleStatusChange = (todoId) => {
    dispatch(updateStatus(todoId, completed));
  };

  const handleColorChange = (todoId, color) => {
    dispatch(updateColor(todoId, color));
  };

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <li
      className={`flex items-center gap-3 rounded-[24px] border border-[var(--line)] border-l-[6px] px-3 py-3 shadow-[0_12px_30px_rgba(58,42,26,0.08)] transition duration-200 hover:-translate-y-px hover:shadow-[0_16px_36px_rgba(58,42,26,0.12)] sm:px-4 ${tone.surface}`}
    >
      <label
        htmlFor={checkboxId}
        className="group flex min-h-[52px] flex-1 cursor-pointer items-center gap-3 rounded-[18px] pr-2 focus-within:outline-none"
      >
        <input
          id={checkboxId}
          type="checkbox"
          checked={completed}
          onChange={() => handleStatusChange(id)}
          className="sr-only"
        />
        <span
          aria-hidden="true"
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 bg-[rgba(255,255,255,0.88)] transition-all ${
            completed
              ? 'border-[var(--gold)] bg-[rgba(181,140,74,0.12)] text-[var(--gold)]'
              : 'border-[rgba(111,98,85,0.38)] text-transparent'
          } group-focus-within:border-[var(--gold)] group-focus-within:ring-4 group-focus-within:ring-[rgba(36,56,74,0.12)]`}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none h-3 w-3 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
          </svg>
        </span>

        <span
          className={`flex-1 select-none break-words rounded-md text-left text-[15px] leading-7 text-[var(--ink)] ${
            completed ? 'text-[rgba(111,98,85,0.78)] line-through' : ''
          }`}
        >
          {text}
        </span>
      </label>

      <button
        type="button"
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[11px] font-bold uppercase tracking-[0.18em] transition focus-visible:outline-none ${
          color === 'green' ? toneClasses.green.markerActive : toneClasses.green.marker
        }`}
        onClick={() => handleColorChange(id, 'green')}
        aria-label={`Set ${todoLabel} color to olive`}
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-current" />
      </button>

      <button
        type="button"
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[11px] font-bold uppercase tracking-[0.18em] transition focus-visible:outline-none ${
          color === 'yellow' ? toneClasses.yellow.markerActive : toneClasses.yellow.marker
        }`}
        onClick={() => handleColorChange(id, 'yellow')}
        aria-label={`Set ${todoLabel} color to ochre`}
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-current" />
      </button>

      <button
        type="button"
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-[11px] font-bold uppercase tracking-[0.18em] transition focus-visible:outline-none ${
          color === 'red' ? toneClasses.red.markerActive : toneClasses.red.marker
        }`}
        onClick={() => handleColorChange(id, 'red')}
        aria-label={`Set ${todoLabel} color to claret`}
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-current" />
      </button>

      <button
        type="button"
        className="ml-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(143,83,73,0.18)] text-xl leading-none text-[var(--claret)] transition hover:bg-[rgba(143,83,73,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(143,83,73,0.16)]"
        onClick={() => handleDelete(id)}
        aria-label={`Delete ${todoLabel}`}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
}
