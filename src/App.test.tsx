import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import App from './App'

beforeEach(() => {
  localStorage.clear()
})

afterEach(() => {
  cleanup()
})

async function addTask(title: string) {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Add a task'), title)
  await user.click(screen.getByRole('button', { name: /add task/i }))
  return user
}

describe('task manager', () => {
  it('adds a task', async () => {
    render(<App />)

    await addTask('Plan the week')

    expect(screen.getByText('Plan the week')).toBeInTheDocument()
    expect(screen.getByText('1 task left')).toBeInTheDocument()
  })

  it('edits a task', async () => {
    render(<App />)
    const user = await addTask('Draft the release notes')

    await user.click(screen.getByRole('button', { name: 'Edit Draft the release notes' }))
    const editInput = screen.getByLabelText('Edit task')
    await user.clear(editInput)
    await user.type(editInput, 'Publish the release notes')
    await user.click(screen.getByRole('button', { name: 'Save' }))

    expect(screen.getByText('Publish the release notes')).toBeInTheDocument()
    expect(screen.queryByText('Draft the release notes')).not.toBeInTheDocument()
  })

  it('marks a task as completed', async () => {
    render(<App />)
    const user = await addTask('Finish the report')

    await user.click(screen.getByRole('button', { name: 'Mark Finish the report as completed' }))

    expect(screen.getByRole('button', { name: 'Mark Finish the report as pending' })).toBeInTheDocument()
    expect(screen.getByText('0 tasks left')).toBeInTheDocument()
  })

  it('deletes a task', async () => {
    render(<App />)
    const user = await addTask('Remove this task')

    await user.click(screen.getByRole('button', { name: 'Delete Remove this task' }))

    expect(screen.queryByText('Remove this task')).not.toBeInTheDocument()
    expect(screen.getByText('Your task list is clear.')).toBeInTheDocument()
  })

  it('filters tasks by status', async () => {
    render(<App />)
    const user = await addTask('Completed task')
    await addTask('Pending task')
    await user.click(screen.getByRole('button', { name: 'Mark Completed task as completed' }))

    await user.click(screen.getByRole('button', { name: 'Completed1' }))

    expect(screen.getByText('Completed task')).toBeInTheDocument()
    expect(screen.queryByText('Pending task')).not.toBeInTheDocument()
  })

  it('persists tasks in localStorage', async () => {
    const { unmount } = render(<App />)
    await addTask('Remember this task')
    unmount()

    render(<App />)

    expect(screen.getByText('Remember this task')).toBeInTheDocument()
  })
})
