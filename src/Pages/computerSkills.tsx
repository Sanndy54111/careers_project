import { Card } from '../components'

const text = `J'ai commencé à m'intéresser à l'informatique vers le début de la cinquième année et j'ai ainsi acquis de nombreuses compétences générales liées à l'informatique, comme l'utilisation d'Excel, la recherche en ligne, la modification des paramètres pour faire ce dont j'ai besoin, la messagerie et la gestion en ligne, et bien d'autres choses liées à l'organisation et à la recherche. Les compétences informatiques sont une bonne chose à avoir dans la vie de tous les jours pour pouvoir rendre votre vie et peut-être même celle des autres plus facile en utilisant l'ordinateur pour accomplir des tâches pour vous.`

export function ComputerSkills() {
  return (
    <Card text={text} title='Les Compétences Informatiques' date='2016' image="https://edu.ge.ch/site/tablettepedagogique/wp-content/uploads/sites/7/2020/06/pix.png"/>
  )
}