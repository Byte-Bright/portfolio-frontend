export default function Aurora() {
  return (
    <div 
      className="
        aurora-wrap 
        bg-stone-100 
        light:bg-gradient-to-br light:from-transparent light:to-teal-600/25
        dark:bg-stone-950 
        space:bg-stone-950
        neon:bg-pink-400
        tron:bg-black
      " 
      aria-hidden="true"
    >
      {/* Positions can be tuned; these give nice coverage */}
      <div className="aurora-blob gold light:hidden" style={{ left: '-12%', top: '8%' }} />
      <div className="aurora-blob blue light:hidden" style={{ right: '-14%', top: '-10%' }} />
      <div className="aurora-blob mix light:hidden"  style={{ left: '18%', bottom: '-12%' }} />
    </div>
  )
}
