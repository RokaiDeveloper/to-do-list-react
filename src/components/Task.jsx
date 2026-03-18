import Botao from './Botao'

function Task({ id, titulo, descricao, feita, onRemover, onToggle }) {
  return (
    <div className="card task-card rounded-3 p-3" style={{ width: '220px' }}>
      <div className="d-flex align-items-center gap-2 mb-2">
        <input
          type="checkbox"
          className="form-check-input mt-0"
          checked={feita}
          onChange={() => onToggle(id)}
        />
        <h2 className={`fs-6 fw-semibold mb-0 text-light ${feita ? 'task-title-feita' : ''}`}>
          {titulo}
        </h2>
      </div>

      {descricao && (
        <p className="text-secondary small mb-2">{descricao}</p>
      )}

      <p className={`small mb-2 ${feita ? 'text-success' : 'text-warning'}`}>
        {feita ? '✅ Feita' : '⏳ Pendente'}
      </p>

      <Botao onClick={() => onRemover(id)} variante="remover">Remover</Botao>
    </div>
  )
}

export default Task