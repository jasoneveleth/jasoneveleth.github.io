import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Github, Linkedin, Mail, ExternalLink, Code, FileText, BookOpen, SquareUserRound } from 'lucide-react';
import './App.css'

const labelStyles = {
  "game": "bg-purple-100 text-purple-800 dark:bg-purple-300 dark:text-purple-900",
  "ml/ai": "bg-emerald-100 text-emerald-800 dark:bg-emerald-400 dark:text-emerald-900",
  "live demo": "bg-cyan-100 text-cyan-800 dark:bg-cyan-300 dark:text-cyan-900"
}
const Label = ({ type }) => (
  <div className={`${labelStyles[type]} text-xs font-medium px-2.5 py-1 rounded-full flex items-center`}>
    {type}
  </div>
)

function Tile({ title, description, labels, links }) {
  return (
    <div class="h-80 w-80 bg-blue-50 shadow-md rounded-lg">
      <div class="h-1/2 bg-blue-100 rounded-t-lg"/>
      <div class="px-4 pt-2 pb-3 bg-white dark:bg-gray-800 rounded-b-lg">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-bold mb-2 text-left">{title}</h3>
          <div class="flex flex-row gap-2 mb-2">
            {labels.map((label, i) => <Label key={i} type={label} />)}
          </div>
        </div>
        <p class="text-gray-700 text-left leading-tight dark:text-white">{description}</p>
        <div class="flex flex-row gap-4 mt-3">
          {links.map(([name, url, icon], i) => (
            <a key={i} href={url} target="_blank" rel="noopener noreferrer" class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              {icon || <ExternalLink size="16" />}
              <div class="font-medium">{name}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const projects = [
    {
      title: "Confetti Sim",
      description: "Live physics simulation exploring falling confetti particles path. Uses camera matrices for rendering.",
      labels: ["live demo"],
      links: [
        ["demo", "#"],
        ["code", "#", (<Code size="16"/>)],
      ]
    },
    {
      title: "Voronoi Sim",
      description: "Grain coarsening simulation using Voronoi diagrams to model foam evolution.",
      labels: [],
      links: [
        ["demo", "#"],
        ["code", "#"],
      ]
    },
    {
      title: "HashFS",
      description: "File system tool that generates file system tree based on content hashes. Outputs an HTML of the directory tree.",
      labels: [],
      links: [
        ["demo", "#"],
        ["code", "#"],
      ]
    }
  ];

  return (
    <div class="bg-white w-full h-full dark:bg-gray-900 dark:text-white">
      <div class="flex flex-row items-center gap-4 mb-4">
        <div class="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0"/>
        <h1 class="text-4xl font-bold tracking-tight">
          Jason Eveleth
        </h1>
      </div>
      <h2 class="text-2xl text-gray-800 mb-4 dark:text-white">explore the math and cs I'm interested in</h2>
      <div class="flex flex-row justify-center gap-4 mb-4">
        <div class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
          <BookOpen size="16" />
          <div class="font-medium">blog</div>
        </div>
        <div class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
          <SquareUserRound size="16" />
          <div class="font-medium">about</div>
        </div>
        <div class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
          <FileText size="16" />
          <div class="font-medium">resume</div>
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-8 mb-8 mt-5">
        {projects.map((project, i) => (
          <Tile key={i} {...project} />
        ))}
      </div>
        <button class="bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full transition-colors">
          show more
        </button>
        <div class="text-gray-800 dark:text-gray-200 mt-6">
          © 2025 Jason Eveleth
        </div>
    </div>
  )
}

export default App