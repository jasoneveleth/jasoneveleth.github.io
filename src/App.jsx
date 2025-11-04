import { useState, useEffect } from 'react'
import {Linkedin} from './Icons.jsx'
import { SiMaterialdesign, SiGithub } from '@icons-pack/react-simple-icons';
import { Radio, Mail, ExternalLink, Code, FileText, Notebook, SquareUserRound, NotebookText } from 'lucide-react';
import './App.css'

const labelStyles = {
  "game": "bg-purple-100 text-purple-800 dark:bg-purple-300 dark:text-purple-900",
  "ml/ai": "bg-emerald-100 text-emerald-800 dark:bg-emerald-400 dark:text-emerald-900",
  "live demo": "bg-cyan-100 text-cyan-800 dark:bg-cyan-300 dark:text-cyan-900"
}
const Label = ({ type }) => (
  <div className={`${labelStyles[type]} text-sm font-medium px-1 rounded-sm`}>
    {type}
  </div>
)

function Button({ href, variant, children }) {
  const classes = {
    // "primary": "bg-blue-500 dark:text-black dark:bg-white text-white hover:bg-blue-400",
    // "secondary": "bg-blue-50 text-blue-600 hover:bg-gray-50"
    "primary": "bg-black dark:text-black dark:bg-white text-white hover:bg-gray-700 dark:hover:bg-gray-200",
    "secondary": "bg-gray-100 hover:bg-gray-50 dark:text-black dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
  }[variant]
  return (
   <a href={href} target="_blank" rel="noopener noreferrer" className={`flex flex-row items-center rounded-lg px-2.5 py-1 gap-1 ${classes}`}>
     {children}
   </a>
  )
}

const projects = [
  {
    title: "Confetti Sim",
    description: "Live physics simulation exploring falling confetti particles path. Uses camera matrices for rendering.",
    labels: ["live demo"],
    links: [
      ["demo", "https://www.jasoneveleth.com/confetti/"],
      ["github", "https://github.com/jasoneveleth/confetti"],
      ["post", "https://www.jasoneveleth.com/blog/2023/07/20/confetti"],
    ],
    thumbnail: "/confetti.png"
  },
  {
    title: "Voronoi Sim",
    description: "Grain coarsening simulation using Voronoi diagrams to model foam evolution.",
    labels: [],
    links: [
      ["github", "https://github.com/jasoneveleth/voronoi2"],
      ["post", "https://www.jasoneveleth.com/blog/2023/07/20/voronoi-blog-post"]
    ],
    thumbnail: "/voronoi.png"
  },
  {
    title: "Game of 24 Solver",
    description: "A website that provides all possible solutions to a game of 24 problem, a classic arithmetic card game.",
    labels: ["game", "ml/ai"],
    links: [
      ["demo", "http://jason.pub/game-of-24-app"],
      ["github", "https://github.com/jasoneveleth/game-of-24-app"],
    ],
    thumbnail: "/hash-fs.png"
  },
  {
    title: "HashFS",
    description: "File system tool that generates file system tree based on content hashes. Outputs an HTML of the directory tree.",
    labels: [],
    links: [
      ["github", "https://github.com/jasoneveleth/hashfs"],
      ["post", "https://www.jasoneveleth.com/blog/2023/07/31/hashfs"],
    ],
    thumbnail: "/hash-fs.png"
  },
  {
    title: "Wave Equation Simulation",
    description: "I've always been curious how to simulate waves or droplets, and I documented my exploration.",
    labels: [],
    links: [
      ["github", "https://github.com/jasoneveleth/wave-equation-simulation"],
      ["post", "https://www.jasoneveleth.com/blog/2023/08/01/wave-equation"],

    ],
    thumbnail: "/hash-fs.png"
  },
  {
    title: "Hackathon Space Game",
    description: "A game designed to simulate driving a space ship through gravity.",
    labels: ["game"],
    links: [
      ["demo", "https://www.jasoneveleth.com/space-game"],
      ["github", "https://github.com/jasoneveleth/space-game/"],
      ["post", "https://devpost.com/software/space-game-5yolw4"],
    ],
    thumbnail: "/hash-fs.png"
  },
  // todo app?
];

function Tile({ title, description, labels, links, thumbnail }) {
  const link_icons = {
    "demo": (<Radio size="14"/>),
    "github": (<SiGithub size={14}/>),
    "post": (<NotebookText size="14"/>)
  }

  const link_button_variant = {
    "demo": "primary",
    "github": "secondary",
    "post": "secondary"

  }
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="h-80 w-80 shadow-md rounded-lg">
      <img 
        className="h-1/2 rounded-t-lg" 
        src={thumbnail}
        onLoad={() => setImageLoaded(true)}
        style={{ display: imageLoaded ? 'block' : 'none' }}
      />
      {!imageLoaded && <div className="h-1/2 rounded-t-lg shimmer"/>}
      <div className="px-4 pt-2 pb-3 bg-white dark:bg-gray-800 rounded-b-lg">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold mb-2 text-left">{title}</h3>
          <div className="flex flex-row gap-2 mb-2 items-center">
            {labels.map((label, i) => <Label key={i} type={label} />)}
          </div>
        </div>
        <p className="text-gray-700 text-left leading-tight dark:text-white">{description}</p>
        <div className="flex flex-row gap-4 mt-3">
          {links.map(([name, url], i) => (
            <Button variant={link_button_variant[name]} href={url} key={i}>
              {link_icons[name] ?? (<ExternalLink size="14" />)}
              <div className="font-medium -translate-y-px">{name}</div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showMore, setShowMore] = useState(false)
  useEffect(() => { // Custom logging
    const data = {
            user_agent: navigator.userAgent,
            timestamp: new Date().toISOString(),
            screen_width: window.screen.width,
            screen_height: window.screen.height,
            viewport_width: window.innerWidth,
            viewport_height: window.innerHeight,
            language: navigator.language,
            timezone_offset: new Date().getTimezoneOffset(),
            referrer: document.referrer,
            page: window.location.href,
    };
    fetch("https://logging.jason.pub:5000/analytics", {
            method: "POST",
            headers: {
                    "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
    }).catch(t => console.error("Analytics request failed:", t));
  }, [])
  return (
    <div className="bg-white w-full h-full dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col mb-4 max-w-200 mx-auto">
        <div className="flex flex-row items-center gap-4 mb-4">
          <img 
            className="w-16 h-16 rounded-full flex-shrink-0" 
            src="/profile256px.png"
            onLoad={() => setImageLoaded(true)}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          {!imageLoaded && <div className="w-16 h-16 rounded-full flex-shrink-0 shimmer"/>}
          <h1 className="text-4xl font-bold tracking-tight">
            Jason Eveleth
          </h1>
        </div>
        <h2 className="text-xl text-gray-800 mb-4 dark:text-white">
          I'm a passionate mathematician and computer scientist. 
          From programming languages and algorithms to AI and machine learning, 
          I love challenges, and I aim to constantly deepen my understanding and hone my problem-solving skills. 
          Below are some of the projects I've worked on.
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-4 mb-4">
        <Button href="https://www.jasoneveleth.com/blog" variant="primary">
          <Notebook size="14" />
          <div className="font-medium -translate-y-px">blog</div>
        </Button>
        {/* <div className="flex flex-row items-center border border-gray-300 rounded-lg px-1.5 py-1 gap-1">
          <SquareUserRound size="14" />
          <div className="font-medium">about</div>
        </div> */}
        <Button variant="secondary" href="https://docs.google.com/document/d/1BfTzzSWARWQhIRfpXk9WrBmcgTAHUZlomkqM17gSCQU/edit?usp=sharing">
          <FileText size="14" />
          <div className="font-medium -translate-y-px">resume</div>
        </Button>
      </div>
      {showMore ?
      (<div className="flex flex-row flex-wrap justify-center gap-8 mb-8 mt-5 max-w-300">
        {projects.map((project, i) => (
          <Tile key={i} {...project} />
        ))}
      </div>):
      (<div className="flex flex-row flex-wrap justify-center gap-8 mb-8 mt-5 max-w-300">
        {projects.slice(0,3).map((project, i) => (
          <Tile key={i} {...project} />
        ))}
      </div>)}
        <button className="bg-gray-100 dark:bg-white dark:text-black px-3 py-1 rounded-full transition-colors font-medium hover:bg-gray-50 cursor-pointer"
        onClick={() => setShowMore(!showMore)}>
          {showMore ? "show less" : "show more"}
        </button>
      <footer className="mt-12 mb-8">
        <div className="flex flex-row justify-center gap-6 mb-4">
          <a href="https://github.com/jasoneveleth" target="_blank" rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <SiGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jasoneveleth/" target="_blank" rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:me@jasoneveleth.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Jason Eveleth
        </div>
      </footer>
    </div>
  )
}

export default App