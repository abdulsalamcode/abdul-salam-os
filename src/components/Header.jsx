function Header() {
  return (
    <header className="border-b border-slate-800 px-6 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">

        <h1 className="text-lg font-semibold tracking-wide">
          ABDUL SALAM OS
        </h1>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#work" className="hover:text-white">
            Work
          </a>

          <a href="#stack" className="hover:text-white">
            Stack
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

      </nav>
    </header>
  );
}

export default Header;