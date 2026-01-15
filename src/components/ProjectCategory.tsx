'use client'

import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { ImageWithFallback } from './ImageWithFallback'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}

const projectsData: Record<string, { title: string; projects: Project[] }> = {
  '3d-pixel-art': {
    title: '3D PIXEL ART',
    projects: [
      {
        id: 'lotus-flower',
        title: 'Lotus Flower',
        description: 'Magnificent lotus flower in 3D pixel art digital style.',
        image: 'https://i.pinimg.com/736x/44/a4/08/44a408e394018ff2cde3f4429f736546.jpg',
        tags: ['PixelArt', '3D'],
        demoUrl: 'https://pin.it/7MnkakbUD',
      }
    ],
  },
  'websites': {
    title: 'WEBSITES',
    projects: [
      
    ],
  },
  'web-apps': {
    title: 'WEB APPS',
    projects: [
      
    ],
  },
  'mobile': {
    title: 'MOBILE',
    projects: [
      
    ],
  },
  'design-system': {
    title: 'DESIGN SYSTEMS',
    projects: [
      
    ],
  },
  'games': {
    title: 'GAMES',
    projects: [
      
    ],
  },
}

export function ProjectCategory({ category }: { category: string }) {
  const categoryData = projectsData[category]

  if (!categoryData) {
    return (
      <div className="iso-grid min-h-screen">
        <div className="pixel-container text-center">
          <h1 className="pixel-text text-2xl text-white mb-4">
            CATEGORY NOT FOUND
          </h1>
          <Link href="/projects" className="pixel-button">
            GO BACK
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="iso-grid min-h-screen">
      <div className="pixel-container">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="pixel-button text-xs flex items-center gap-2 mb-6 inline-flex"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK
          </Link>
          
          <h1 className="pixel-text text-3xl md:text-4xl text-white mb-4 glow-text">
            &gt; {categoryData.title}
          </h1>
          <p className="pixel-text text-xs md:text-sm text-purple-300">
            {categoryData.projects.length} projects in this category
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.projects.map((project) => (
            <div
              key={project.id}
              className="pixel-card hover:scale-105 transition-transform duration-200"
            >
              {/* Project Image */}
              <div className="mb-4 overflow-hidden bg-gray-800 aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover pixel-project-img"
                />
              </div>

              {/* Project Info */}
              <h3 className="pixel-text text-sm text-white mb-2">
                {project.title}
              </h3>
              <p className="text-purple-200 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="pixel-text text-xs px-2 py-1 bg-purple-700/50 text-purple-200 border border-purple-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2">
                {category === '3d-pixel-art' && (
                  <Link
                    href={`/projects/${category}/${project.id}`}
                    className="pixel-button text-xs flex items-center gap-1 flex-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    PREVIEW
                  </Link>
                )}
                {project.demoUrl && category === '3d-pixel-art' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button text-xs flex items-center gap-1 flex-1 bg-gradient-to-b from-red-600 to-red-800 border-red-700"
                  >
                    <ExternalLink className="w-3 h-3" />
                    PINTEREST
                  </a>
                )}
                {project.demoUrl && category !== '3d-pixel-art' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button text-xs flex items-center gap-1 flex-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    DEMO
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixel-button text-xs flex items-center gap-1 flex-1 bg-gradient-to-b from-gray-600 to-gray-800 border-gray-700"
                  >
                    <Github className="w-3 h-3" />
                    CODE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
