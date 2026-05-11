const Card = ({ id, title, body }) => {
  return (
    <div className="card">
      <h2>Post #{id}</h2>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;