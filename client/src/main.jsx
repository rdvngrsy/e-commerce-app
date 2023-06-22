import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

let docTitle = document.title;
  window.addEventListener("blur", () => {
  document.title = "Please, Come Back.";
});
  window.addEventListener("focus", () => {
  document.title = docTitle;
});


// *****************  Sayfada değişikliğinde ve sekme değişikliğinde fetch işlemini sınırlıyoruz.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
// *****************  Sayfada değişikliğinde ve sekme değişikliğinde fetch işlemini sınırlıyoruz.


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
