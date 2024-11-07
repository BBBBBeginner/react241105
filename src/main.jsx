import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App38 from "./practice/App38.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App38 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
