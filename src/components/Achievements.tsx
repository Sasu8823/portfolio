'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Pr',
    description: 'A modern web application built with Next.js and TypeScript',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/project1.jpg'
  },
  {
    title: 'Project 2',
    description: 'An e-commerce platform with real-time inventory management',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/project2.jpg'
  },
  {
    title: 'Project 3',
    description: 'A social media dashboard with analytics and reporting',
    technologies: ['Vue.js', 'Firebase', 'Chart.js'],
    image: '/project3.jpg'
  }
]

const Achievements = () => {
  return (
    <section className="min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          私のプロジェクト
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20"
            >
              <div className="aspect-video bg-gray-800 relative">
                {/* Add project image here */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Project Image
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements 