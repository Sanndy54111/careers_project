import { Card } from '../components'

const text = `En septième année, je faisais partie de l'équipe informatique de Dalewood (l'école secondaire où j'allais). À Dalewood, nous organisions des événements comme la course Terry Fox, où nous jouions de la musique et courions autour du terrain pour soutenir la recherche sur le cancer. En tant que membres de l'équipe informatique, nous avons été chargés du système de sonorisation de la course, et ce fut l'un des moments les plus mémorables où la gestion de projet a été impliquée. La gestion de projet est très utile dans la vie de tous les jours et en particulier dans les emplois car elle peut facilement être mise en œuvre dans d'autres compétences transférables telles que les compétences informatiques.`

export function ProjectManagement() {
  return (
    <Card text={text} title='Gestion de projets' date='2018' image="https://journalmetro.com/wp-content/uploads/2017/11/carriecc80res-responsabilitecc81s_c100.jpg" />
  )
}