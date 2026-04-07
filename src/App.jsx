import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="flex min-h-screen flex-col text-[var(--ink)]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="paper-panel relative w-full overflow-hidden rounded-[32px] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <div className="pointer-events-none absolute -left-16 top-24 h-44 w-44 rounded-full border border-[rgba(181,140,74,0.16)]" />
          <div className="pointer-events-none absolute -right-12 bottom-10 h-52 w-52 rounded-full border border-[rgba(36,56,74,0.14)]" />

          <Header />

          <TodoList />

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
