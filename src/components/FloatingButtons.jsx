import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_URL } from '../config'

export default function FloatingButtons() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-all duration-300 hover:bg-brand ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 15l6-6 6 6" /></svg>
      </button>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <FaWhatsapp className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded bg-navy px-3 py-1.5 text-xs font-medium opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">Chat with us</span>
      </a>
    </div>
  )
}
