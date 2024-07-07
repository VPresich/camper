import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectFavorites } from "../../redux/campers/selectors";
import { fetchFavorites } from "../../redux/favorites/operations";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Favorites.module.css";
import { Link } from "react-router-dom";

export default function Favorites() {
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  const dispatch = useDispatch();

  const favoritsIdx = useSelector(selectFavorites);

  useEffect(() => {
    if (favoritsIdx.length === 0) return;
    dispatch(fetchFavorites(favoritsIdx))
      .unwrap()
      .then((data) => {
        setFavoriteCampers(data);
      })
      .catch(() => {
        toast.error("Error fetching");
      });
  }, [favoritsIdx, dispatch]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.container}>
        <section className={css.favoritesContent}>
          <h2 className="visually-hidden"> Favorites</h2>
          {favoriteCampers && favoriteCampers.length !== 0 ? (
            <FavoritesList campers={favoriteCampers} />
          ) : (
            <Link to="/catalog" className={css.link}>
              <p className={css.text}>
                Looks like you have not selected any favorites yet...
              </p>
            </Link>
          )}
        </section>
      </div>
    </>
  );
}
