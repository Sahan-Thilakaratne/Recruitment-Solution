import React from 'react'

export const PersonalInfo = ({ email }: { type: 'sign-in' | 'sign-up' }) => {
  return (
    
    
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Email:</p>
          <p>john.doe@example.com</p>
        </div>
        <div>
          <p className="font-semibold">Phone:</p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div>
          <p className="font-semibold">Location:</p>
          <p>New York, NY</p>
        </div>
        <div>
          <p className="font-semibold">LinkedIn:</p>
          <p>linkedin.com/in/johndoe</p>
        </div>
      </div>
    </section>

  )
}
