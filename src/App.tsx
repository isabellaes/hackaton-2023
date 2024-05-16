import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import ActivityDetailsPage from "./pages/ActivityDetailsPage/ActivityDetailPage.tsx"
import Header from "./components/header/Header.tsx"
import ActivityPage from "./pages/ActivityPage/ActivityPage.tsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/activitys" element={<ActivityPage />} />
        <Route path="/activity/:id" element={<ActivityDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
