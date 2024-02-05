import './TestimonialCard.css';

const TestimonialCard = ({ customer }) => {
  const card = (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{customer.fullName}</h4>
      <blockquote><p>"{customer.says}"</p></blockquote>
    </article>
  );

  return (
    customer.href === "" ? (
      <div>{card}</div>
    ) : (
      <a href={customer.href} target="_blank">{card}</a>
    )
  );
};

export default TestimonialCard;
