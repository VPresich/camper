import css from "./ImagesList.module.css";

export default function ImagesList({ images }) {
  return (
    <div className={css.listContainer}>
      <ul className={css.imageList}>
        {images.map((image, index) => (
          <li key={index} className={css.imageContainer}>
            <img className={css.img} src={image} alt={`image-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
