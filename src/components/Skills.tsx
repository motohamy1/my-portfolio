import React from 'react'
import DomeGallery from './ui/DomeGallery'
import { 
  Atom, Server, FileCode, FileJson, Wind, GitBranch, Github, FileType, Palette, Database, Triangle, Share2, Container, Cloud, PenTool, Layers, Zap, Move, Box, Flame, TestTube, Eye, BookOpen, Code, Package, Shield, Ghost, Smartphone, Compass, Activity, Tablet
} from 'lucide-react'

const skills = [
  { label: 'Next.js', color: '#ffd8d1', textColor: '#5c2b29', icon: <Triangle className="w-full h-full fill-current" /> }, // card-one
  { label: 'React', color: '#dcf5ff', textColor: '#1e3a8a', icon: <Atom className="w-full h-full" /> }, // card-two
  { label: 'Node.js', color: '#ffedca', textColor: '#78350f', icon: <Server className="w-full h-full" /> }, // card-three
  { label: 'TypeScript', color: '#fff0e5', textColor: '#2e1065', icon: <FileCode className="w-full h-full" /> }, // card-large
  { label: 'JavaScript', color: '#EFFBBB', textColor: '#14532d', icon: <FileJson className="w-full h-full" /> }, // cream
  { label: 'Tailwind CSS', color: '#2C5364', textColor: '#ffffff', icon: <Wind className="w-full h-full" /> }, // wine
  { label: 'Git', color: '#EFFBBB', textColor: '#14532d', icon: <GitBranch className="w-full h-full" /> }, // forest
  { label: 'GitHub', color: '#ADA996', textColor: '#ffffff', icon: <Github className="w-full h-full" /> }, // rust
  { label: 'HTML5', color: '#ffd8d1', textColor: '#9a3412', icon: <FileType className="w-full h-full" /> },
  { label: 'CSS3', color: '#dcf5ff', textColor: '#1e40af', icon: <Palette className="w-full h-full" /> },
  { label: 'PostgreSQL', color: '#ffedca', textColor: '#334155', icon: <Database className="w-full h-full" /> },
  { label: 'Prisma', color: '#fff0e5', textColor: '#0f172a', icon: <Triangle className="w-full h-full" /> },
  { label: 'GraphQL', color: '#EFFBBB', textColor: '#db2777', icon: <Share2 className="w-full h-full" /> },
  { label: 'Docker', color: '#2C5364', textColor: '#ffffff', icon: <Container className="w-full h-full" /> },
  { label: 'AWS', color: '#fbf7ba', textColor: '#854d0e', icon: <Cloud className="w-full h-full" /> },
  { label: 'Figma', color: '#ADA996', textColor: '#ffffff', icon: <PenTool className="w-full h-full" /> },
  { label: 'Redux', color: '#ffd8d1', textColor: '#5b21b6', icon: <Layers className="w-full h-full" /> },
  { label: 'Zustand', color: '#dcf5ff', textColor: '#1e3a8a', icon: <Ghost className="w-full h-full" /> },
  { label: 'Framer Motion', color: '#ffedca', textColor: '#be185d', icon: <Move className="w-full h-full" /> },
  { label: 'Three.js', color: '#fff0e5', textColor: '#000000', icon: <Box className="w-full h-full" /> },
  { label: 'Vercel', color: '#EFFBBB', textColor: '#000000', icon: <Triangle className="w-full h-full fill-black" /> },
  { label: 'Supabase', color: '#2C5364', textColor: '#ffffff', icon: <Database className="w-full h-full" /> },
  { label: 'Firebase', color: '#EFFBBB', textColor: '#000000', icon: <Flame className="w-full h-full" /> },
  { label: 'Jest', color: '#ADA996', textColor: '#ffffff', icon: <TestTube className="w-full h-full" /> },
  { label: 'Cypress', color: '#ffd8d1', textColor: '#064e3b', icon: <Eye className="w-full h-full" /> },
  { label: 'Storybook', color: '#dcf5ff', textColor: '#be185d', icon: <BookOpen className="w-full h-full" /> },
  { label: 'Sass', color: '#ffedca', textColor: '#db2777', icon: <Code className="w-full h-full" /> },
  { label: 'Webpack', color: '#fff0e5', textColor: '#1e3a8a', icon: <Package className="w-full h-full" /> },
  { label: 'Vite', color: '#EFFBBB', textColor: '#6b21a8', icon: <Zap className="w-full h-full" /> },
  { label: 'Bun', color: '#2C5364', textColor: '#ffffff', icon: <Package className="w-full h-full" /> },
  { label: 'Python', color: '#fbf7ba', textColor: '#1e3a8a', icon: <Code className="w-full h-full" /> },
  { label: 'Django', color: '#ADA996', textColor: '#ffffff', icon: <Shield className="w-full h-full" /> },
  { label: 'React Native', color: '#dcf5ff', textColor: '#1e3a8a', icon: <Smartphone className="w-full h-full" /> },
  { label: 'Expo', color: '#fff0e5', textColor: '#000000', icon: <Zap className="w-full h-full" /> },
  { label: 'React Navigation', color: '#ffedca', textColor: '#78350f', icon: <Compass className="w-full h-full" /> },
  { label: 'Reanimated', color: '#ffd8d1', textColor: '#5c2b29', icon: <Activity className="w-full h-full" /> },
  { label: 'Android', color: '#EFFBBB', textColor: '#14532d', icon: <Smartphone className="w-full h-full" /> },
  { label: 'iOS', color: '#dcf5ff', textColor: '#1e3a8a', icon: <Tablet className="w-full h-full" /> }
];

const Skills = () => {
  return (
    <div id="skills" style={{ width: '100%', height: '100vh', overflow: 'hidden' }} className='scroll-mt-10 rounded-2xl bg-darker'>
      <DomeGallery items={skills} />
    </div>
  )
}

export default Skills