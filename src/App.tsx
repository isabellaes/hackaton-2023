import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ActivityDetailsPage from "./pages/ActivityDetailPage.tsx"
import ActivityPage from "./pages/ActivityPage/ActivityPage.tsx"
import HomePage from "./pages/HomePage.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/activitys" element={<ActivityPage />} />
        <Route path="/activity/:id" element={<ActivityDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
