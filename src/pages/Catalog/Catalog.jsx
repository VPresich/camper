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
import Button from "../../components/UI/Button/Button";
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
      <div className={css.container}>
        <SideBar />
        <section className={css.catalogContainer}>
          <h2 className="visually-hidden"> Campers catalog</h2>
          <CardsList campers={campers} />

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            totalItems > campers.length && (
              <Button
                variant="transparent"
                width="145px"
                onClick={handleLoadMore}
              >
                Load More
              </Button>
            )
          )}
        </section>
      </div>
    </>
  );
}
