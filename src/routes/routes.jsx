import EventList from "../Parts/EventList/EventList";
import FilterEvents from "../Parts/FilterEvents/FilterEvents";
import EventDetails from "../Parts/EventDetails/EventDetails";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetails /> },
];
