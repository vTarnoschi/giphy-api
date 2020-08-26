import { lazy } from "react";

export default {
  App: lazy(() => import("../App")),
  Favoritos: lazy(() => import("../Favoritos")),
};
