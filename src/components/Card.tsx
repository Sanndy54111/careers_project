import { useState } from 'react'

interface CardProps {
  text: string
  title: string
  date: string
}

export function Card(props: CardProps) {
  const [text, setText] = useState(props.text)
  const [title, setTitle] = useState(props.title)
  const [date, setDate] = useState(props.date)

  return (
    <div className="m-auto mt-10 card w-96 bg-slate-200 shadow-xl">
      <div className="card-body text-black">
        <div className="card-title text-current">
          <h1>{title}</h1>
          <div className="badge badge-accent">
            {date}
          </div>  
        </div>
        <p className="text-current">{text}</p>
      </div>
    </div>
  )
}