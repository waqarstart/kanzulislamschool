import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const sel = 'main section:not([data-noreveal]) > div > *, main section:not([data-noreveal]) .grid > *'
    const els = [...document.querySelectorAll(sel)]
    els.forEach(el => {
      el.classList.add('reveal')
      const parent = el.parentElement
      if (parent.classList.contains('grid')) el.style.transitionDelay = `${Math.min([...parent.children].indexOf(el), 5) * 90}ms`
    })
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return
        const el = en.target
        el.classList.add('reveal-in')
        io.unobserve(el)
        setTimeout(() => { el.classList.remove('reveal', 'reveal-in'); el.style.transitionDelay = '' }, 1200)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return (
    <>
      <Navbar />
      <main><Outlet /></main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
