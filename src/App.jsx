import './App.css'
import { useState } from 'react'
import Botao from './components/Botao'
import Task from './components/Task'

function App() {

  const [tarefas, setTarefas] = useState([])
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  function adicionarTarefa() {
    if (titulo.trim() === '') return

    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      descricao: descricao,
      feita: false
    }

    setTarefas([...tarefas, novaTarefa])
    setTitulo('')
    setDescricao('')
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter(t => t.id !== id))
  }

  function toggleTarefa(id) {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, feita: !t.feita } : t
    ))
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-start py-5 px-3">
      <div className="card card-app rounded-4 p-4 w-100" style={{ maxWidth: '860px' }}>

        <h1 className="titulo text-center mb-4">📝 To-Do List</h1>

        <div className="d-flex gap-2 mb-4">
          <input
            className="form-control input-custom"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()}
            placeholder="Título da tarefa..."
          />
          <input
            className="form-control input-custom"
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && adicionarTarefa()}
            placeholder="Descrição (opcional)..."
          />
          <Botao onClick={adicionarTarefa}>Adicionar</Botao>
        </div>

        <div className="d-flex flex-wrap gap-3">
          {tarefas.map(t => (
            <Task
              key={t.id}
              id={t.id}
              titulo={t.titulo}
              descricao={t.descricao}
              feita={t.feita}
              onRemover={removerTarefa}
              onToggle={toggleTarefa}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default App