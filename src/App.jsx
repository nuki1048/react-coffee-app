import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/root/Root";
import "./App.scss";
import Spinner from "./components/spinner/Spinner";

const Home = lazy(() => import("./pages/home/Home"));
const OurCoffee = lazy(() => import("./pages/ourCoffee/OurCoffee"));
const Pleasure = lazy(() => import("./pages/pleasure/Pleasure"));
const OurCoffeeDetails = lazy(() =>
  import("./pages/ourCoffeeDetails/OurCoffeeDetails")
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root color={"white"} beforeColor={"white"} />}>
        <Route path="/" element={<Home />} />
        <Route path="ourCoffee" element={<OurCoffee />} />
        <Route path="ourCoffee/:productId" element={<OurCoffeeDetails />} />
        <Route path="pleasure" element={<Pleasure />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <Suspense
        fallback={<Spinner stylez={{ display: "flex", marginTop: "200px" }} />}
      >
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
