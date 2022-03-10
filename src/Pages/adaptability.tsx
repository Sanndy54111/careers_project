import { Card } from '../components'

const text = `Le premier jour où j'ai suivi l'école en personne, j'ai réalisé à quel point les choses étaient différentes de l'école en ligne et même s'il me prend un peu de temps pour m'y habituer (l'heure de réveil), je pense que je me suis adaptée assez rapidement à ce nouvel environnement. La capacité d'adaptation est une compétence importante dans toutes sortes d'emplois, car elle permet de s'habituer facilement à de nouveaux environnements et services.`

export function Adaptability() {
  return (
    <Card text={text} title='Adaptabilité' date='Septembre 2021' image="https://www.dynamique-mag.com/wp-content/uploads/2109.jpg"/>
  )
}