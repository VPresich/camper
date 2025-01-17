import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCampersWithParams } from "../../redux/campers/operations";
import { setPage } from "../../redux/campers/slice";
import AppLayout from "../../components/AppLayout/AppLayout";
import {
  // selectCampers, //without filters
  selectCurrentPage,
  selectIsLoading,
  selectItemsPerPage,
  selectIsMore,
  selectCampersByDetails,
} from "../../redux/campers/selectors";

import DocumentTitle from "../../components/DocumentTitle";
import SideBar from "../../components/SideBar/SideBar";
import CardsList from "../../components/CardsList/CardsList";
import Button from "../../components/UI/Button/Button";
import css from "./Catalog.module.css";
import { selectQueryParams } from "../../redux/filters/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  // const campersAll = useSelector(selectCampers); //without filters
  const campers = useSelector(selectCampersByDetails);

  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const isLoading = useSelector(selectIsLoading);
  const isMore = useSelector(selectIsMore);
  const queryParams = useSelector(selectQueryParams);

  useEffect(() => {
    dispatch(
      getCampersWithParams({
        page: currentPage,
        limit: itemsPerPage,
        queryParams,
      })
    );
  }, [dispatch, currentPage, itemsPerPage, queryParams]);

  const handleLoadMore = () => {
    dispatch(setPage(currentPage + 1));
  };

  return (
    <>
      <DocumentTitle>Camper catalog</DocumentTitle>
      <AppLayout>
        <div className={css.container}>
          <SideBar />
          <section className={css.catalogContainer}>
            <h2 className="visually-hidden"> Campers catalog</h2>

            <CardsList campers={campers} />

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              isMore && (
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
      </AppLayout>
    </>
  );
}
