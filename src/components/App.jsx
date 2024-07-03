import React from "react";
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
    </React.Fragment>
  );
}
