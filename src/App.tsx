import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import CountryDetails from "./page/CountryDetails.tsx";
import NotFound from "./page/NotFound.tsx";
import Home from "./page/Home.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/country/:countryName" element={<CountryDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
