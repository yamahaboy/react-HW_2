import React from "react";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./pages/router/appRouter";

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
