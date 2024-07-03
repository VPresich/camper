import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampersPerPage } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import {
  selectCampers,
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectTotalItems,
} from "../../redux/campers/selectors";

import DocumentTitle from "../../components/DocumentTitle";
import SideBar from "../../components/SideBar/SideBar";
import CardsList from "../../components/CardsList/CardsList";
import css from "./Catalog.module.css";

export default function Catalog() {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const totalItems = useSelector(selectTotalItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCampersPerPage({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  return (
    <>
      <DocumentTitle>Camper catalog</DocumentTitle>
      <h2>Catalog Page</h2>
      <div className={css.container}>
        <SideBar />
        <CardsList campers={campers} />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        totalItems > campers.length && (
          <button onClick={handleLoadMore}>Load More</button>
        )
      )}
    </>
  );
}
