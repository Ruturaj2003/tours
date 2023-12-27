import Tour from './Tour';

const Tours = (props) => {
  const { tours, removeTour } = props;
  console.log('Tours', { removeTour });

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour_data={tour} removeTour={removeTour}></Tour>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
