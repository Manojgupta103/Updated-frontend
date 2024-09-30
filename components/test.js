
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SignupForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { fullName, email, password })
  }

  return (
    
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>
        
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
            <Image src="/images/google-icon.png" alt="Google" width={20} height={20} />
            <span>Sign up with Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 px-4 hover:bg-gray-50">
            <Image src="/images/facebook-icon.png" alt="Facebook" width={20} height={20} />
            <span>Sign up with Facebook</span>
          </button>
        </div>

        <div className="text-center text-gray-500 mb-6">-OR-</div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-docq-blue"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="E-Mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-docq-blue"
              required
            />
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-docq-blue"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-docq-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Create Account
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-docq-blue hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}