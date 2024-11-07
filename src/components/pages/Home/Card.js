import './Card.css';

const Card = ({award}) => {
  const c = (
    <article className="award-card">
      <div className="award-card-image">
        <img src={award.image} alt={award.name} />
      </div>
      <div className="award-card-header">
        <h3>{award.name}</h3>
        <span>{award.time}</span>
      </div>
      <div className="award-card-body-footer">
        hello
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
