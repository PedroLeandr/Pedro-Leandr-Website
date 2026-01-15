'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Model3DViewer } from '@/components/Model3DViewer'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl?: string
  modelUrl?: string
}

const projectsData: Record<string, Project> = {
  'lotus-flower': {
    id: 'lotus-flower',
    title: 'Lotus Flower',
    description: 'Magnificent lotus flower in 3D pixel art digital style. Created with voxel techniques to achieve a unique retro-futuristic aesthetic.',
    image: 'https://i.pinimg.com/736x/44/a4/08/44a408e394018ff2cde3f4429f736546.jpg',
    tags: ['PixelArt', '3D'],
    demoUrl: 'https://pin.it/7MnkakbUD',
    modelUrl: '/models/lotus-flower.glb',
  }
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.projectId as string
  const project = projectsData[projectId]

  if (!project) {
    return (
      <div className="iso-grid min-h-screen">
        <div className="pixel-container text-center">
          <h1 className="pixel-text text-2xl text-white mb-4">
            PROJECT NOT FOUND
          </h1>
          <Link href="/projects/3d-pixel-art" className="pixel-button">
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
            href="/projects/3d-pixel-art"
            className="pixel-button text-xs flex items-center gap-2 mb-6 inline-flex"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO 3D PIXEL ART
          </Link>
          
          <h1 className="pixel-text text-3xl md:text-4xl text-white mb-4 glow-text">
            &gt; {project.title}
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="pixel-text text-xs px-3 py-1 bg-purple-700/50 text-purple-200 border border-purple-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 3D Model Viewer */}
          <div className="pixel-card" style={{ height: '600px' }}>
            <Model3DViewer 
              modelUrl={project.modelUrl}
              fallbackImage={project.image}
            />
          </div>

          {/* Project Info */}
          <div className="pixel-card">
            <h2 className="pixel-text text-xl text-white mb-4">
              &gt; ABOUT
            </h2>
            <p className="text-purple-200 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-button text-sm flex items-center justify-center gap-2 bg-gradient-to-b from-red-600 to-red-800 border-red-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  VIEW ON PINTEREST
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="pixel-card">
          <h2 className="pixel-text text-xl text-white mb-4">
            &gt; PROJECT DETAILS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-purple-200">
            <div>
              <h3 className="pixel-text text-sm text-purple-300 mb-2">TECHNIQUE</h3>
              <p>3D Voxel Art / Pixel Art</p>
            </div>
            <div>
              <h3 className="pixel-text text-sm text-purple-300 mb-2">STYLE</h3>
              <p>Retro-Futuristic Digital Art</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
