import React from 'react'

export const Education = () => {

    const education = [
        {
          degree: "Master of Science in Computer Science",
          institution: "Tech University",
          year: "2017",
        },
        {
          degree: "Bachelor of Science in Software Engineering",
          institution: "State University",
          year: "2015",
        },
      ]


  return (
    
    
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>

    
  )
}
