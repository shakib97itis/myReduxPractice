export default function Header() {
  return (
    <header id="header">
      <div className="container">
        <img src="/public/img/lws-logo.svg" alt="logo" className="logo" />
        <div className="flex items-center">
          <a className="text-white min-w-12.5 font-medium" href="#">
            Home
          </a>
          <button className="log-btn btn">Login</button>
        </div>
      </div>
    </header>
  );
}
