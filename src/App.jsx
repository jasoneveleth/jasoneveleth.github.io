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

function Tile() {
  return (
    <div class="h-80 w-80 bg-blue-50 shadow-md rounded-lg">
      <div class="h-1/2 bg-blue-100 rounded-t-lg"/>
      <div class="px-4 pt-2 pb-3 bg-white dark:bg-gray-800 rounded-b-lg">
        <div class="flex flex-row justify-between">
          <h3 class="text-xl font-bold mb-2 text-left">Tile Title</h3>
          <div class="flex flex-row gap-2 mb-2">
            <Label type="game" />
            <Label type="ml/ai" />
            <Label type="live demo" />
          </div>
        </div>
        <p class="text-gray-700 text-left leading-tight dark:text-white">This is a description of the tile content. It provides a brief overview of what the tile is about.</p>
        <div class="flex flex-row gap-4 mt-3">
          <div class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
            <ExternalLink size="16" />
            <div class="font-medium">link</div>
          </div>
          <div class="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
            <Code size="16" />
            <div class="font-medium">code</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
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
      <div className="m-4 flex justify-center">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <div class="flex flex-row flex-wrap justify-center gap-8 mb-8">
        <Tile />
        <Tile />
        <Tile />
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
