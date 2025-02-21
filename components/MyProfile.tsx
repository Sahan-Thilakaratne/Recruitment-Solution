import React from 'react'
import Image from "next/image"
import { CVUpload } from './CVUpload'
import { PersonalInfo } from './PersonalInfo'
import { Experiences } from './Experiences'
import { Education } from './Education'
import { Skills } from './Skills'

export const MyProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="relative w-48 h-48 mx-auto mb-4">
            <Image
              src="/icons/IMG_0410rr.png"
              alt="Profile Picture"
              fill
              className="rounded-full border-4 border-primary shadow-lg"
            />
          </div>

          
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">John Doe</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Software Developer</p>
        </div>

        <CVUpload />

        <div className="mt-8 space-y-8">
          <PersonalInfo />
          <Experiences />
          <Education />
          <Skills />
        </div>
      </div>
    </div>
  )
}
