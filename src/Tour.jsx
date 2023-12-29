import { useState } from 'react';

const Tour = (props) => {
  const { tour_data, removeTour } = props;
  const { id, info, image, name, price } = tour_data;

  const [readMore, setReadMore] = useState(false);
  console.log(info.substring(0, 12));

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h3>{name}</h3>

        <p>
          {readMore ? info : `${info.substring(0, 179)}...`}

          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
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
