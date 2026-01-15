'use client'

import Link from 'next/link'
import { Code2, Palette, Cpu, Sparkles } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

export function Home() {
  const [aboutMeContent, setAboutMeContent] = useState('')

  useEffect(() => {
    fetch('/about-me.md')
      .then(res => res.text())
      .then(text => setAboutMeContent(text))
      .catch(err => console.error('Error loading about-me.md:', err))
  }, [])

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, name: 'FRONT-END', tech: 'React, TypeScript, Tailwind' },
    { icon: <Cpu className="w-8 h-8" />, name: 'BACK-END', tech: 'Node.js, Express, APIs' },
    { icon: <Palette className="w-8 h-8" />, name: '3D PIXEL ART', tech: 'Voxel Design, Game Assets' },
    { icon: <Sparkles className="w-8 h-8" />, name: 'FULL-STACK', tech: 'Complete Web Solutions' },
  ]

  return (
    <div className="iso-grid min-h-screen">
      <div className="pixel-container">
        {/* Hero Section */}
        <div className="text-center mb-16 float-animation">
          <div className="inline-block pixel-card mb-6">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-purple-700 relative">
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400 to-blue-400"></div>
              <Code2 className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </div>
          
          <h1 className="pixel-text text-4xl md:text-5xl text-white mb-4 glow-text">
            Pedro_Leandr
          </h1>
          <p className="pixel-text text-sm md:text-base text-purple-300 mb-8">
            &gt; FULL-STACK DEVELOPER & 3D PIXEL ARTIST
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/projects" className="pixel-button text-xs md:text-sm">
              VIEW PROJECTS
            </Link>
            <a
              href="#about"
              className="pixel-button text-xs md:text-sm bg-gradient-to-b from-purple-500 to-purple-700 border-purple-700"
            >
              ABOUT ME
            </a>
          </div>
        </div>

        {/* About Section with Markdown */}
        <div id="about" className="mb-16">
          <div className="pixel-card max-w-4xl mx-auto markdown-pixel-content">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="pixel-text text-3xl md:text-4xl text-white mb-6 glow-text">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="pixel-text text-xl md:text-2xl text-purple-300 mb-4 mt-8">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="pixel-text text-lg text-purple-200 mb-3 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-purple-100 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-purple-500 pl-4 py-2 my-4 bg-purple-900/30 italic text-purple-200">
                    {children}
                  </blockquote>
                ),
                pre: ({ children }) => (
                  <pre className="pixel-card bg-[#0d1117] p-4 overflow-x-auto my-4 border-2 border-green-500/30" style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', lineHeight: '1.2' }}>
                    {children}
                  </pre>
                ),
                code: ({ className, children, ...props }) => {
                  const isInline = !className
                  if (isInline) {
                    return (
                      <code className="pixel-text text-xs bg-purple-900/50 text-green-300 px-2 py-1 rounded-sm border border-purple-700">
                        {children}
                      </code>
                    )
                  }
                  return (
                    <code className="text-green-400 block whitespace-pre" style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: '11px', lineHeight: '1.2' }}>
                      {children}
                    </code>
                  )
                },
                ul: ({ children }) => (
                  <ul className="list-none space-y-2 my-4 ml-4">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-purple-100 before:content-['▸'] before:text-purple-400 before:mr-2">
                    {children}
                  </li>
                ),
                hr: () => (
                  <hr className="my-8 border-t-2 border-purple-700/50" />
                ),
                strong: ({ children }) => (
                  <strong className="text-white font-bold">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="text-purple-200 italic">
                    {children}
                  </em>
                ),
              }}
            >
              {aboutMeContent}
            </ReactMarkdown>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <h2 className="pixel-text text-2xl md:text-3xl text-white mb-8 text-center">
            &gt; SKILLS.exe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="pixel-card hover:scale-105 transition-transform duration-200"
              >
                <div className="text-purple-400 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="pixel-text text-xs text-white mb-3 text-center">
                  {skill.name}
                </h3>
                <p className="text-purple-300 text-sm text-center">
                  {skill.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="pixel-card max-w-2xl mx-auto">
            <h2 className="pixel-text text-xl md:text-2xl text-white mb-6">
              &gt; CONTACT.connect()
            </h2>
            <p className="text-purple-200 mb-6">
              Ready to collaborate on amazing projects?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:pedroleandrovieiranascimento@gmail.com"
                className="pixel-button text-xs"
              >
                EMAIL
              </a>
              <a
                href="https://wa.me/351938174439"
                className="pixel-button text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP
              </a>
              <a
                href="https://github.com/PedroLeandr"
                className="pixel-button text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/pedro-leandr"
                className="pixel-button text-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
