interface CardProps {
  text: string
  title: string
  date: string
  image: string
}

export function Card(props: CardProps) {

  return (
    <div className="m-auto mt-3 card w-96 bg-slate-200 shadow-xl">
      <figure><img src={props.image} alt="Adaptabilité"/></figure>
      <div className="card-body text-black">
        <div className="card-title text-current">
          <h1>{props.title}</h1>
          <div className="badge badge-accent">
            {props.date}
          </div>  
        </div>
        <p className="text-current">{props.text}</p>
      </div>
    </div>
  )
}