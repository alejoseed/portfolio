import Image from 'next/image'
import Nav from './components/navbar'
import AboutMe from './components/aboutMe'
import ProjectCard from './components/projectCard'
export default function Home() {
  return (
    <main className="grid w-full">
      <Nav />
      <AboutMe />
      <div className='flex'>
        <ProjectCard projectName='MangaGuesser'/>
        <ProjectCard projectName='SkinFolio'/>
      </div>

    </main>
  )
}
