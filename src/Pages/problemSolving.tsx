import { Card } from '../components'

const text = `Lorsque j'ai commencé à programmer (pendant le 5e année d'école), j'ai surtout dû apprendre la syntaxe du langage de programmation que j'apprenais à l'époque (python). Mais une fois que j'ai commencé à travailler sur de petits projets, j'ai réalisé ce qu'était la programmation : La résolution de problèmes. La partie principale de la programmation n'est pas les outils que le langage de programmation vous donne, mais apprendre à les utiliser d'une manière qui est efficace et fonctionnelle, et donc de mon expérience avec la programmation, je dirais que je suis devenu assez compétent dans la résolution de problèmes. La résolution de problèmes est une compétence importante à avoir dans la vie de tous les jours pour pouvoir trouver rapidement la meilleure façon de faire quelque chose.`

export function ProblemSolving() {
  return (
    <Card text={text} title='La résolution de problèmes' date='2017'/>
  )
}