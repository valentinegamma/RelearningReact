import React from "react"
import { createRoot } from "react-dom/client"
import TeamPage from "@/Section Components/TeamPage.jsx"
import "@/index.css"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TeamPage />
  </React.StrictMode>,
)
