export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-6">
        <span className="tracking-[0.4em] text-sm">Y.J.D.G.I.</span>

        <div className="hidden md:flex gap-10 text-xs tracking-widest uppercase">
          <a href="#fashion">Fashion</a>
          <a href="#real-estate">Real Estate</a>
          <a href="#culture">Culture</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
