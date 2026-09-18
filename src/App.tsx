import { FormEvent, useEffect, useMemo, useState } from 'react'

type Filter = 'all' | 'pending' | 'completed'

type Task = {
  id: number
  title: string
  completed: boolean
}

const STORAGE_KEY = 'task-manager-tasks'

function loadTasks(): Task[] {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY)
    return savedTasks ? JSON.parse(savedTasks) : []
  } catch {
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)
  const [newTask, setNewTask] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const pendingCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.length - pendingCount
  const visibleTasks = useMemo(() => {
    if (filter === 'pending') return tasks.filter((task) => !task.completed)
    if (filter === 'completed') return tasks.filter((task) => task.completed)
    return tasks
  }, [filter, tasks])

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const title = newTask.trim()
    if (!title) return

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title, completed: false },
    ])
    setNewTask('')
  }

  function toggleTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  function deleteTask(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  return (
    <main className="page-shell">
      <section className="task-app" aria-labelledby="page-title">
        <header className="app-header">
          <div>
            <p className="eyebrow">Daily focus</p>
            <h1 id="page-title">Task manager</h1>
            <p className="subtitle">Keep your priorities moving forward.</p>
          </div>
          <div className="progress-badge" aria-label={`${completedCount} completed tasks`}>
            <span className="progress-ring">{completedCount}</span>
            <span>done</span>
          </div>
        </header>

        <form className="add-form" onSubmit={addTask}>
          <label className="sr-only" htmlFor="new-task">Add a task</label>
          <input
            id="new-task"
            type="text"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <button type="submit">Add task <span aria-hidden="true">↵</span></button>
        </form>

        <nav className="filter-bar" aria-label="Filter tasks">
          {(['all', 'pending', 'completed'] as Filter[]).map((option) => (
            <button
              className={filter === option ? 'filter active' : 'filter'}
              key={option}
              type="button"
              onClick={() => setFilter(option)}
            >
              {option[0].toUpperCase() + option.slice(1)}
              <span>{option === 'all' ? tasks.length : option === 'pending' ? pendingCount : completedCount}</span>
            </button>
          ))}
        </nav>

        <div className="task-list" aria-live="polite">
          {visibleTasks.length > 0 ? visibleTasks.map((task) => (
            <article className={task.completed ? 'task completed' : 'task'} key={task.id}>
              <button
                className="check-button"
                type="button"
                aria-label={task.completed ? `Mark ${task.title} as pending` : `Mark ${task.title} as completed`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed && '✓'}
              </button>
              <span className="task-title">{task.title}</span>
              <button className="delete-button" type="button" aria-label={`Delete ${task.title}`} onClick={() => deleteTask(task.id)}>
                ×
              </button>
            </article>
          )) : (
            <div className="empty-state">
              <span className="empty-icon">✦</span>
              <p>{filter === 'all' ? 'Your task list is clear.' : `No ${filter} tasks yet.`}</p>
              <small>Add something important to get started.</small>
            </div>
          )}
        </div>

        <footer className="app-footer">
          <span>{pendingCount} {pendingCount === 1 ? 'task' : 'tasks'} left</span>
          <span className="saved-note"><span className="status-dot" /> Saved automatically</span>
        </footer>
      </section>
      <p className="footer-note">A calm place for your next small win.</p>
    </main>
  )
}

export default App
