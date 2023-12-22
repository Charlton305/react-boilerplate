import { Routes, Route } from "react-router-dom"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import NotFoundPage from "../components/NotFoundPage";

const RenderRoutes = (props) => {
  const authenticated = props.authenticated

  return (
    <Routes>
      <Route path="/" element={<ExpenseDashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default RenderRoutes

