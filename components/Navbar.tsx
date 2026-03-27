'use client'
export default function Navbar() {
  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight">
          <span className="text-[#eab308]">IronClad</span> IP
        </span>
        <button
          onClick={scrollToCTA}
          className="px-4 py-2 text-sm font-medium bg-[#eab308] text-black rounded-lg hover:bg-[#eab308]/90 transition-colors"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  )
}
