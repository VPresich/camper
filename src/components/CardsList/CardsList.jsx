import Card from "../../components/Card/Card";

export default function CardsList({ campers }) {
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.id}>
          <Card
            id={camper.id}
            imgUrl={camper.gallery[0]}
            name={camper.name}
            price={camper.price}
            description={camper.description}
            details={{
              adults: camper.adults,
              transmission: camper.transmission,
              engine: camper.engine,
              kitchen: camper.details.kitchen,
              beds: camper.details.beds,
              form: camper.form,
            }}
            location={camper.location}
            reviews={camper.reviews}
          />
        </li>
      ))}
    </ul>
  );
}
