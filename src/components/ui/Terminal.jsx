import React, { useState, useRef, useEffect } from 'react'

const commands = {
  help: `
Available commands:

  help        Show this help message
  about       Learn about me
  skills      List my technical skills
  projects    View my projects
  contact     Get my contact info
  whoami      Display current user
  ls          List sections
  cd [sect]   Navigate to a section
  clear       Clear the terminal
  neofetch    Display system info
  cowsay [msg]  Make a cow say something
  sudo [cmd]  Try to run as admin
  matrix      Enter the matrix
`,
  about: `
┌─────────────────────────────────────────┐
│  Manas Munjial                          │
│  Software Engineer & AI/ML Developer    │
└─────────────────────────────────────────┘

  🎓 Penn State '26 | CS Major, Math Minor | 3.88 GPA
  🤖 Building AI systems that solve real problems

  8x Dean's List | Available May 2026
`,
  skills: `
  Languages   →  Python, C, JavaScript, Java, C++, SQL
  ML/AI       →  PyTorch, TensorFlow, LangChain, OpenCV, RAG
  Web         →  React, Node.js, Flask, Vite, TailwindCSS
  Cloud       →  Azure, Supabase, MongoDB, Docker, FAISS
  Systems     →  Linux, GDB, Memory Management, Concurrency
`,
  projects: `
  🏆 aluminum-tolerance-calc
     Production app for Aluminum Association
     Tech: React, Flask, Supabase, JWT
     Result: 1st Place Capstone / 76 Teams

  📈 workpro-rag
     RAG system for Penn State OPP
     Tech: LangChain, Azure AI Search
     Result: 70% faster response time

  📅 autocal
     AI-powered smart calendar assistant
     Tech: React, Node.js, LangChain
     Status: In Development

  → Type "cd projects" to see the full section
`,
  contact: `
  📧 Email     manasmunjial@icloud.com
  💼 LinkedIn  linkedin.com/in/manas-munjial
  🐙 GitHub    github.com/Manchi0

  Status: Open to opportunities starting May 2026
`,
  whoami: '  manas',
  ls: '  hero/  about/  projects/  experience/  skills/  contact/',
  neofetch: `
      ██████████████        manas@portfolio
    ██              ██      ─────────────────
    ██  ██████████  ██      OS: Developer Brain v26
    ██  ██      ██  ██      Host: Penn State University
    ██  ██      ██  ██      Kernel: CS + Math
    ██  ██████████  ██      Uptime: 4 years
    ██              ██      Shell: bash/zsh
      ██████████████        GPA: 3.88/4.0
    ██  ██      ██  ██      Awards: 1st/76 Capstone
    ██              ██      Status: Available May 2026
`,
  matrix: `
  Wake up, Neo...
  The Matrix has you...
  Follow the white rabbit.

  Knock, knock.
`,
}

function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Manas Portfolio Terminal v1.0' },
    { type: 'output', content: 'Type "help" for available commands.\n' },
    { type: 'input', content: 'about' },
    { type: 'output', content: `
  name: "Manas Munjial"
  role: "Software Engineer & AI/ML Developer"
  education: "Penn State '26 | CS + Math | 3.88 GPA"

  > HINT: Type "help" to see available commands and learn more about me!
` },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  // Scroll to bottom when history changes
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [history])

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const [command, ...args] = trimmed.split(' ')

    // Add input to history
    const newHistory = [...history, { type: 'input', content: cmd }]

    let output = ''

    if (command === '') {
      // Empty command
      setHistory(newHistory)
      return
    } else if (command === 'clear') {
      setHistory([])
      return
    } else if (command === 'cd') {
      const section = args[0]
      const validSections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact']
      if (!section) {
        output = '  Usage: cd <section>\n  Available: ' + validSections.join(', ')
      } else if (validSections.includes(section)) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        output = `  Navigating to ${section}...`
      } else {
        output = `  cd: ${section}: No such section`
      }
    } else if (command === 'cowsay') {
      const message = args.join(' ') || 'Moo!'
      const border = '-'.repeat(message.length + 2)
      output = `
   ${border}
  < ${message} >
   ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
    } else if (command === 'sudo') {
      if (args[0] === 'hire') {
        output = '  [sudo] password for manas: ********\n  ✨ HIRE_MODE activated!\n  Contact: manasmunjial@icloud.com'
      } else if (args.join(' ').includes('rm')) {
        output = '  Nice try! 🙅 This portfolio is protected.'
      } else {
        output = `  sudo: ${args[0] || 'command'}: not found\n  (Try "sudo hire manas")`
      }
    } else if (commands[command]) {
      output = commands[command]
    } else {
      output = `  Command not found: ${command}\n  Type "help" for available commands.`
    }

    newHistory.push({ type: 'output', content: output })
    setHistory(newHistory)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
    setInput('')
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      style={{
        height: '400px',
        overflowY: 'auto',
        fontFamily: 'monospace',
        fontSize: '14px',
        cursor: 'text',
      }}
    >
      {/* History */}
      {history.map((item, index) => (
        <div
          key={index}
          style={{
            whiteSpace: 'pre-wrap',
            color: item.type === 'input' ? '#4ade80' : '#9ca3af',
            marginBottom: '2px',
          }}
        >
          {item.type === 'input' ? `> ${item.content}` : item.content}
        </div>
      ))}

      {/* Input Line */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ color: '#4ade80', marginRight: '8px' }}>{'>'}</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: 'white',
            fontFamily: 'monospace',
            fontSize: '14px',
            padding: 0,
            margin: 0,
          }}
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
        <span
          style={{
            width: '8px',
            height: '18px',
            backgroundColor: '#4ade80',
            animation: 'blink 1s step-end infinite',
          }}
        />
      </form>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Terminal
