// import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import Catalog from "../pages/Catalog/Catalog";
import Favorites from "../pages/Favorite/Favorites";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

// const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
// const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
// const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// import Loader from './UI/Loader/Loader';

function AppRouter() {
  return (
    // <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // </Suspense>
  );
}

export default AppRouter;
