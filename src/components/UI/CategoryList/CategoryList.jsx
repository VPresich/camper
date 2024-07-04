import Category from "../Category/Category";
import css from "./CategoryList.module.css";

export default function CategoryList({ categories }) {
  return (
    <ul className={css.container}>
      {categories.map(({ iconId, title, fill }) => (
        <li key={iconId} className={css.item}>
          <Category idIcon={iconId} title={title} fill={fill} />
        </li>
      ))}
    </ul>
  );
}
