'use client'
import * as React from 'react'

export default function Home() {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [isSending, setIsSending] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const response = await fetch('http://127.0.0.1:3000/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
        }),
        mode: 'no-cors',
      })
    } catch (error) {
      console.log(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className='p-4'>
      <form onSubmit={handleSubmit}>
        <div className='my-2'>
          <label htmlFor='Name'>Name</label>
          <input
            type='text'
            className='text-black'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='my-2'>
          <label htmlFor='Name'>Email</label>
          <input
            type='email'
            className='text-black'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='p-2 transition-colors bg-blue-500 rounded-sm disabled:bg-blue-300'
          disabled={isSending}
        >
          Send Email
        </button>
      </form>
    </main>
  )
}
