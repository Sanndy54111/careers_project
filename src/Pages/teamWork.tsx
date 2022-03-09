import { Card } from '../components'

const text = `Le premier projet de groupe " sérieux " que j'ai eu était en 6ème année où nous avons présenté environ 7 diapositives à la classe. C'est l'une des présentations dont j'étais le plus fier, car elle était très bonne et parce que c'était un projet de groupe. En faisant les projets de groupe, j'ai beaucoup appris sur le travail d'équipe et sur la façon de communiquer correctement avec les autres pour atteindre nos objectifs. Le travail d'équipe est indispensable dans les emplois où vous devez travailler avec d'autres personnes, il vous aide à communiquer vos objectifs et vos idées de manière efficace et aide tout le monde à mieux travailler avec vous.`

export function TeamWork() {
  return (
    <Card text={text} title="Travail D'équipe" date='2017'/>
  )
}