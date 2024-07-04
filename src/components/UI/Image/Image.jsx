import css from "./Image.module.css";

export default function Image({ imgUrl, name }) {
  return (
    <div className={css.imgContainer}>
      <img className={css.img} src={imgUrl} alt={name} />
    </div>
  );
}
