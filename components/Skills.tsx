import React from 'react'

export const Skills = () => {

    const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL", "GraphQL", "AWS", "Docker", "Git"]


  return (
    

    <section className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>

    
  )
}
