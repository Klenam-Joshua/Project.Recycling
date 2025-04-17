import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthContext from "./Context/AuthContext";
// DevTools

// import 'react-circular-progressbar/dist/styles.css';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <AuthContext>
        <App />
      </AuthContext>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </div>
);
