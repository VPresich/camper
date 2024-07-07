import React from "react";
import { Toaster } from "react-hot-toast";
import AppBar from "./AppBar/AppBar";
import AppRouter from "./AppRouter";
import AppLayout from "./AppLayout/AppLayout";

export default function App() {
  return (
    <React.Fragment>
      <AppLayout>
        <AppBar />
        <AppRouter />
      </AppLayout>
      <Toaster position="top-right" reverseOrder={false} />
    </React.Fragment>
  );
}
