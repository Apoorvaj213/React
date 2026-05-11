import './Card.css'

const Card = ({ id, title, body }) => {
  return (
    <div className="card">
      <h2 className="card-id">Post #{id}</h2>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </div>
  )
}

export default Card