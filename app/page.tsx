'use client'
import Link from 'next/link'
import * as React from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'

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
    <main className='relative min-h-screen px-6 sm:px-12 md:px-24'>
      <div className='flex items-center justify-between'>
        <div className='w-3/5 mt-8 text-xs md:text-sm'>
          Edit the email template at: <br />
          <code className='bg-slate-800'>
            react-email-starter/emails/spring-sales.tsx
          </code>
        </div>
        <Link href='https://github.com/Chinwike1/react-email-app'>
          <BsGithub className='w-6 h-6 transition-colors cursor-pointer hover:fill-offwhite-800' />
        </Link>
      </div>
      <h2 className='w-full mx-auto my-20 text-3xl font-bold text-center break-words md:my-36 lg:w-4/5 md:text-4xl'>
        Enter{' '}
        <Link
          href='https://react.email'
          className='text-transparent bg-clip-text bg-gradient-to-r from-[#1EDBFF] to-[#3AD1ED]'
        >
          React Email
        </Link>
        , the next-generation way to develop emails for the web.
      </h2>
      <form
        className='w-full mx-auto mb-8 md:w-3/5 lg:w-2/5 text-offwhite'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col mb-4'>
          <label className='mb-2' htmlFor='Name'>
            Name
          </label>
          <input
            type='text'
            className='px-4 py-3 bg-transparent border rounded-lg t border-offwhite'
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus={true}
            required
          />
        </div>
        <div className='flex flex-col'>
          <label className='mb-2' htmlFor='Email'>
            Email
          </label>
          <input
            type='email'
            className='px-4 py-3 bg-transparent border rounded-lg t border-offwhite'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type='submit'
          className='flex justify-center mt-8 px-4 py-3 rounded-lg w-full transition-colors bg-[#6a68ec] hover:bg-[#7C7AE8] disabled:bg-[#adace0]'
          disabled={isSending}
        >
          {!isSending ? (
            'Send Marketing Email'
          ) : (
            <CgSpinner className='w-6 h-6 animate-spin' />
          )}
        </button>
      </form>
      <Link
        className='absolute flex items-center justify-center text-sm transform -translate-x-1/2 hover:text-offwhite-800 left-1/2'
        href='http://localhost:3001/'
        target='_blank'
        rel='noreferrer'
      >
        <span className='flex items-center my-8 text-center '>
          Email Server: 3001 <BsArrowUpRight className='ml-1' />
        </span>
      </Link>
    </main>
  )
}
