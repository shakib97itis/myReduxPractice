import {useState} from 'react';
import {useDispatch} from 'react-redux';
import addTodo from '../redux/thunk/addTodo';
import updateCompleteAll from '../redux/thunk/updateCompleteAllTodo';
import deleteCompletedTodo from '../redux/thunk/deleteCompletedTodo';

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const trimmedInput = input.trim();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!trimmedInput) {
      return;
    }

    dispatch(addTodo(trimmedInput));
    setInput('');
  };

  const completeHandler = () => {
    dispatch(updateCompleteAll());
  };

  const clearHandler = () => {
    dispatch(deleteCompletedTodo());
  };

  return (
    <section className="relative space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="small-caps text-[var(--muted)]">Daily notes</p>
          <h1 className="classic-display mt-3 text-5xl font-semibold leading-none text-[var(--navy)] sm:text-6xl">
            Keep the day in order
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-[15px]">
            A calm, ledger-inspired workspace for tracking what matters next.
            Add tasks, mark progress, and sort the list with understated color.
          </p>
        </div>

        <div className="paper-inset rounded-[24px] px-4 py-3 text-sm text-[var(--muted)] shadow-[0_10px_25px_rgba(58,42,26,0.08)]">
          <p className="small-caps text-[0.62rem] text-[var(--gold)]">Focus</p>
          <p className="mt-2 text-[15px] leading-6 text-[var(--ink)]">
            One clean list. Clear priorities.
          </p>
        </div>
      </div>

      <div className="paper-inset rounded-[28px] p-4 sm:p-6">
        <form className="flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={submitHandler}>
          <label className="flex-1">
            <span className="small-caps block text-[0.62rem] text-[var(--muted)]">
              New task
            </span>
            <input
              type="text"
              placeholder="Write an entry for today"
              className="mt-3 w-full rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.72)] px-5 py-4 text-[15px] text-[var(--ink)] outline-none transition placeholder:text-[rgba(111,98,85,0.72)] focus:border-[var(--gold)] focus:ring-4 focus:ring-[rgba(181,140,74,0.16)]"
              value={input}
              onChange={handleInput}
            />
          </label>

          <button
            type="submit"
            disabled={!trimmedInput}
            className="classic-button h-14 px-6 text-xs font-semibold uppercase tracking-[0.24em] disabled:border-[rgba(111,98,85,0.12)] disabled:bg-[rgba(111,98,85,0.18)] disabled:text-[rgba(255,250,242,0.62)]"
          >
            Add Task
          </button>
        </form>

        <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            className="classic-button classic-button--secondary inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em]"
            onClick={completeHandler}
          >
            Complete All Tasks
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-[rgba(143,83,73,0.18)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--claret)] transition hover:bg-[rgba(143,83,73,0.08)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(143,83,73,0.14)]"
            onClick={clearHandler}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </section>
  );
}
