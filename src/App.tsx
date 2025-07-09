import CountryDetails from "./page/CountryDetails.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/country/:countryName" element={<CountryDetails />} />
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
