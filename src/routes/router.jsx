import Home from "../pages/home";
import DetailedConcert from "../pages/DetailedConcert";
import AddVenue from "../pages/Venues/addVenue";
import Feedvenues from "../pages/Venues/allVenues";
import AllConcerts from "../pages/concerts/allConcerts";
import LoginScreen from "../pages/authentication/Login";

export const routes = [
  {
    url: "/",
    component: <Home />,
  },
  {
    url: "/login",
    component: <LoginScreen />,
  },
  {
    url: "/register",
    component: <DetailedConcert />,
  },
  {
    url: "/concert",
    component: <AllConcerts />,
  },
  {
    url: "/concert/:id",
    component: <DetailedConcert />,
  },
  {
    url: "/venues",
    component: <Feedvenues />,
  },
  {
    url: "/venues/add",
    component: <AddVenue />,
  },
  {
    url: "/venues/:id",
    component: <DetailedConcert />,
  },
  {
    url: "*",
    component: <Home />,
  },
];
