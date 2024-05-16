import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityPage from "./pages/ActivityPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ActivityDetailsPage from "./pages/ActivityDetailsPage/ActivityDetailPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/activitys" element={<ActivityPage />} />
        <Route path="/activity/:id" element={<ActivityDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
