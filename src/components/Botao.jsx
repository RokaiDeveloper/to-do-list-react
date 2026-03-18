function Botao({ onClick, children, variante }) {
  return (
    <button
      className={variante === 'remover' ? 'btn btn-outline-danger btn-sm' : 'btn btn-primary text-dark fw-semibold'}
      style={variante !== 'remover' ? { background: '#63b3ed', border: 'none', whiteSpace: 'nowrap' } : { whiteSpace: 'nowrap' }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Botao