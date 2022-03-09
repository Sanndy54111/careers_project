import { NavigationBar } from './components'
import { Routes, Route } from 'react-router-dom'
import { Responsability, Adaptability, ProblemSolving, ComputerSkills, TeamWork, ProjectManagement, NotFound } from './Pages'

const pages: Record<string, string> = {
  'Responsabilité': '/responsability',
  'Adaptabilité': '/adaptability',
  'La résolution de problèmes': '/problemsolving',
  'Compétences informatiques': '/computerskills',
  'travail d\'équipe': '/teamwork',
  'Gestion de projets': '/projectmanagement'
}

function App() {
  return (
    <>
      <NavigationBar pages={pages} text={['Adaptabilité', 'Responsabilité', 'Gestion de projets', 'travail d\'équipe', 'La résolution de problèmes', 'Compétences informatiques']} />
      <Routes>
        <Route path="/" element={<Adaptability />} />
        <Route path="/responsability" element={ <Responsability /> } />
        <Route path="/adaptability" element={ <Adaptability /> } />
        <Route path="/problemsolving" element={ <ProblemSolving /> } />
        <Route path="/computerskills" element={ <ComputerSkills /> } />
        <Route path="/teamwork" element={ <TeamWork /> } />
        <Route path="/projectmanagement" element={ <ProjectManagement /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </>
    )
}

export default App