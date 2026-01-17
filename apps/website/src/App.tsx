import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Fashion from "./sections/Fashion"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Fashion />
      </main>
    </div>
  )
}
