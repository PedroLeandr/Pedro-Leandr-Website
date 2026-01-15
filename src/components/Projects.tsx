'use client'

import Link from 'next/link'
import { Folder, Box, Palette, Globe, Gamepad2, Smartphone } from 'lucide-react'

export function Projects() {
  const projectCategories = [
    {
      id: '3d-pixel-art',
      name: '3D PIXEL ART',
      icon: <Box className="w-12 h-12" />,
      count: 1,
      description: 'Voxel art, game assets and 3D pixel modeling',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'websites',
      name: 'WEBSITES',
      icon: <Globe className="w-12 h-12" />,
      count: 0,
      description: 'Landing pages, portfolios and corporate sites',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'web-apps',
      name: 'WEB APPS',
      icon: <Gamepad2 className="w-12 h-12" />,
      count: 0,
      description: 'Interactive web applications and dashboards',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'mobile',
      name: 'MOBILE',
      icon: <Smartphone className="w-12 h-12" />,
      count: 0,
      description: 'Responsive mobile apps and PWAs',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'design-system',
      name: 'DESIGN SYSTEMS',
      icon: <Palette className="w-12 h-12" />,
      count: 0,
      description: 'Component libraries and style guides',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      id: 'games',
      name: 'GAMES',
      icon: <Gamepad2 className="w-12 h-12" />,
      count: 0,
      description: 'Web games and interactive experiments',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <div className="iso-grid min-h-screen">
      <div className="pixel-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="pixel-text text-3xl md:text-4xl text-white mb-4 glow-text">
            &gt; MY_PROJECTS
          </h1>
          <p className="pixel-text text-xs md:text-sm text-purple-300">
            Click on the folders to explore each category
          </p>
        </div>

        {/* Folders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectCategories.map((category) => (
            <Link
              key={category.id}
              href={`/projects/${category.id}`}
              className="pixel-folder relative group cursor-pointer"
            >
              {/* Folder Icon */}
              <div className="flex items-center gap-3 mb-4">
                <Folder className="w-10 h-10 text-amber-900" />
                <h3 className="pixel-text text-xs text-amber-900">
                  {category.name}
                </h3>
              </div>

              {/* Folder Content Preview */}
              <div className="bg-white/90 p-4 rounded-sm border-2 border-amber-700">
                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-sm flex items-center justify-center text-white`}>
                  {category.icon}
                </div>
                <p className="text-gray-700 text-sm mb-2 text-center">
                  {category.description}
                </p>
                <div className="text-center">
                  <span className="pixel-text text-xs text-amber-900">
                    {category.count} PROJECTS
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-yellow-300/0 group-hover:bg-yellow-300/10 transition-colors pointer-events-none"></div>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="pixel-card max-w-3xl mx-auto text-center">
          <p className="text-purple-200 pixel-text text-xs leading-relaxed">
            💡 TIP: Each folder contains real projects built with modern technologies
          </p>
        </div>
      </div>
    </div>
  )
}
