import FavoriteCard from "../FavoriteCard/FavoriteCard";
import css from "./FavoritesList.module.css";

export default function FavoritesList({ campers }) {
  return (
    <ul className={css.container}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <FavoriteCard
            id={camper.id}
            imgUrl={camper.gallery[0]}
            name={camper.name}
            price={camper.price}
            rating={camper.rating}
            details={{
              ...camper.details,
            }}
            location={camper.location}
          />
        </li>
      ))}
    </ul>
  );
}
