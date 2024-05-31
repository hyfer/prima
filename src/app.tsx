import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { showLoader } from "./loaders/show-loader.ts";
import { Home } from "./routes/home";
import { Root } from "./routes/root";
import { RootBoundary } from "./routes/root-boundary.tsx";
import { Show } from "./routes/show.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RootBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show/:showId",
        element: <Show />,
        loader: showLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
};

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export { App };
