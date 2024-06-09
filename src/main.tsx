import ReactDOM from "react-dom/client";
import { DirectionProvider } from "@radix-ui/react-direction";

import { RouterProvider } from "react-router-dom";
import routes from "./routes.tsx";

import { Provider } from "react-redux";
import store from "@/store/store.ts";

import { ThemeProvider } from "@/components/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DirectionProvider dir='ltr'>
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </DirectionProvider>
);
