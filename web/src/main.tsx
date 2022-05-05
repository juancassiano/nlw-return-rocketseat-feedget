import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/global.css";
import { ThemeBackground } from "./ThemeBackground";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeBackground>
        <div className="absolute right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6">
          <ThemeToggle />
        </div>
        <App />
      </ThemeBackground>
    </ThemeProvider>
  </React.StrictMode>
);
