import { Card } from '../components'

const text = `J'ai passé les derniers jours d'école à rattraper le travail manqué qui s'était accumulé pendant l'année scolaire et j'ai réalisé l'ampleur de la procrastination que j'avais faite. C'est ainsi que j'ai compris que pour réussir et ne pas être stressée, je devais être plus responsable dans mon travail scolaire. Aujourd'hui, j'ai toujours cette habitude, mais je fais de mon mieux pour essayer de suivre le rythme du travail qui m'est confié. La responsabilité est une bonne compétence transférable parce qu'elle vous aide à suivre le rythme des choses et à ne pas les laisser aux autres ou à la dernière minute.`

export function Responsability() {
  return (
    <Card text={text} title='Responsabilité' date='Juin 2021' image="https://www.revuegestion.ca/media/magefan_blog/responsabilite_sociale_entreprise_1.jpg" />
  )
}