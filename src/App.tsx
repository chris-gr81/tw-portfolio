import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [{ index: true, element: <Index /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
