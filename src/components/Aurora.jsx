export default function Aurora() {
  return (
    <div className="aurora-wrap" aria-hidden="true">
      {/* Positions can be tuned; these give nice coverage */}
      <div className="aurora-blob gold" style={{ left: '-12%', top: '8%' }} />
      <div className="aurora-blob blue" style={{ right: '-14%', top: '-10%' }} />
      <div className="aurora-blob mix"  style={{ left: '18%', bottom: '-12%' }} />
    </div>
  )
}
