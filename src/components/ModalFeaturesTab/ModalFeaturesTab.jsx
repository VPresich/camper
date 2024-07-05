import CategoryList from "../UI/CategoryList/CategoryList";
import getCategoryAllList from "../../auxiliary/getCategoryAllList";

import css from "./ModalFeaturesTab.module.css";

export default function ModalFeaturesTab({
  details = {},
  vechicleDetails = {},
}) {
  const vechicleKeys = Object.keys(vechicleDetails); 
  return (
    <div className={css.container}>
      <CategoryList
        categories={getCategoryAllList(details)}
        containerStyle={css.categoriesList}
      />
      <div>
        <h3 className={css.title}>Vehicle Details</h3>
        <ul className={css.table}>
          {vechicleKeys.map((key, index) => (
            <li className={css.row} key={index}>
              <span>{`${key.charAt(0).toUpperCase() + key.slice(1)}`}</span>
              <span>{vechicleDetails[key]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
