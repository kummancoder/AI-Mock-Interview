import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/public-layouts";
import HomePage from "@/routes/home";
const App = () => {
  return (
    <Router>
      <Routes>
      {/* Public routes */}
        <Route element={<PublicLayout />}>
        <Route index element={ <HomePage />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App