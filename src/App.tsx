import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import Impressum from "./routes/Impressum";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          { index: true, element: <Index /> },
          { path: "Impressum", element: <Impressum /> },
        ],
      },
    ],
    { basename: "/tw-portfolio/" }
  );

  return <RouterProvider router={router} />;
}
export default App;
