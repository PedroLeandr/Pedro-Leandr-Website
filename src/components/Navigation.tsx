'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pixel-art-nav">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://github.com/PedroLeandr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 pixel-button"
          >
            <Github className="w-6 h-6" />
            <span className="font-['Press_Start_2P',monospace] text-sm">Pedro_Leandr</span>
          </a>
          
          <div className="flex gap-4">
            <Link 
              href="/"
              className={`pixel-button text-sm ${pathname === '/' ? 'opacity-80' : ''}`}
            >
              HOME
            </Link>
            <Link 
              href="/projects"
              className={`pixel-button text-sm ${pathname.startsWith('/projects') ? 'opacity-80' : ''}`}
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
