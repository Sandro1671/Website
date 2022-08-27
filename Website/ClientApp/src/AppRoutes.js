import Home from "./pages/Home";
import Culinu from "./pages/Projects";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Culinu />,
  },
  // {
  //   path: '/fetch-data',
  //   element: <FetchData />
  // }
];

export default AppRoutes;
