// Photo placeholder: replace with <img src={...} /> using your own school photos in src/assets
export default function Ph({ label = 'Photo', className = '' }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-brand/40 to-navy text-sky/80 text-xs tracking-widest uppercase ${className}`}>
      {label}
    </div>
  )
}
