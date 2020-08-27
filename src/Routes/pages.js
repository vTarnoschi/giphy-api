import { lazy } from "react";

export default {
  App: lazy(() => import("../Containers/Home")),
  Favoritos: lazy(() => import("../Containers/Favoritos")),
};
