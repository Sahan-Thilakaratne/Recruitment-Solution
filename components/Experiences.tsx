import React from 'react'

export const Experiences = () => {

    const experiences = [
        {
          title: "Senior Software Developer",
          company: "Tech Solutions Inc.",
          period: "Jan 2020 - Present",
          description: "Led a team of developers in creating innovative web applications.",
        },
        {
          title: "Software Developer",
          company: "Digital Innovations LLC",
          period: "Jun 2017 - Dec 2019",
          description: "Developed and maintained multiple client-facing applications.",
        },
      ]


  return (
    
    
    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.period}</p>
            <p className="mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
    
  )
}
