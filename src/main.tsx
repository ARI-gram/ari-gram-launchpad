import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Lets CSS hide scroll-reveal elements only when JavaScript is running,
// so content is never hidden if scripts fail to load.
document.documentElement.classList.add("reveal-ready");

createRoot(document.getElementById("root")!).render(<App />);
