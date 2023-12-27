const Tour = (props) => {
  const { tour_data, removeTour } = props;
  const { id, info, image, name, price } = tour_data;
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h3>{name}</h3>

        <p>{info}</p>
        <button
          type="btn"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
