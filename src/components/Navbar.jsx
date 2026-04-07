export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-[rgba(255,255,255,0.08)] bg-[rgba(26,39,51,0.92)] px-4 py-4 text-[var(--paper)] shadow-[0_16px_32px_rgba(22,32,41,0.24)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="small-caps text-[0.62rem] text-[#ddc59b] sm:text-[0.68rem]">
            Redux Practice
          </p>
          <p className="classic-display text-3xl font-semibold tracking-[0.08em] text-[var(--paper)]">
            Task Ledger
          </p>
        </div>

        <p className="small-caps text-[0.62rem] text-[rgba(255,250,242,0.72)] sm:text-right">
          Simple Todo Application
        </p>
      </div>
    </header>
  );
}
