import Tour from './Tour';

const Tours = (props) => {
  const { tours } = props;

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour_data={tour}></Tour>;
        })}
      </div>
    </section>
  );
};
export default Tours;
