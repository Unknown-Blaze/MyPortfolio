import './Card.css';

const Card = ({award}) => {
  const c = (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={award.image} alt={award.name} />
      </div>
      <div className="meal-card-header">
        <h3>{award.name}</h3>
        <span>{award.time}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{award.description}</p>
      </div>
    </article>
  );
  return (
    award.href === "" ? (
      <div>{c}</div>
    ) : (
      <a href={award.href} target="_blank">{c}</a>
    )
  );
};

export default Card;
