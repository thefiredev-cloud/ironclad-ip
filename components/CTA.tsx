'use client'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  return (
    <section id="cta" className="py-24">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="glass rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Your Ideas Deserve <span className="text-[#eab308]">Iron Protection</span>
          </h2>
          <p className="text-[#94a3b8] mb-8">Join the waitlist. Get early access before public launch.</p>
          <form
            action="https://formsubmit.co/tanner@thefiredev.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="_subject" value="IronClad IP Waitlist Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#eab308]/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#eab308] text-black font-semibold rounded-lg hover:bg-[#eab308]/90 transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-[#94a3b8] text-xs mt-4">No spam. No credit card. Early access when we launch.</p>
        </div>
      </div>
    </section>
  )
}
