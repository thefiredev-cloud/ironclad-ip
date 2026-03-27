export default function HowItWorks() {
  const steps = [
    { number: '01', title: 'Describe Your Invention', description: 'Provide a plain-language description of what you\'ve built and what makes it novel.' },
    { number: '02', title: 'AI Analyzes & Drafts', description: 'IronClad searches prior art, identifies claim scope, and generates a complete patent application.' },
    { number: '03', title: 'File and Protect', description: 'Review, refine, and file directly — or hand off to a patent attorney with a 90% complete application.' },
  ]

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It <span className="text-[#eab308]">Works</span></h2>
          <p className="text-[#94a3b8]">From invention to protection in hours, not months.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#eab308]/30 to-transparent z-10" />
              )}
              <div className="glass rounded-xl p-8">
                <div className="text-5xl font-bold text-[#eab308]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#94a3b8]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
