import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import Impressum from "./routes/Impressum";

function App() {
  const router = createBrowserRouter([
    {
      path: "/tw-portfolio",
      element: <Root />,
      children: [
        { index: true, element: <Index /> },
        { path: "impressum", element: <Impressum /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
